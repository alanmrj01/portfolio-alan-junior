import { readFile, readdir, stat, writeFile } from 'node:fs/promises'
import { dirname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDirectory, '..')
const projectsSource = join(projectRoot, 'src', 'data', 'projects.ts')
const mediaRoot = join(projectRoot, 'public', 'images', 'projects')
const manifestOutput = join(projectRoot, 'src', 'data', 'projectMedia.generated.ts')

function readProjectIds(sourceText) {
  const sourceFile = ts.createSourceFile(projectsSource, sourceText, ts.ScriptTarget.Latest, true)
  const ids = []

  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue

    for (const declaration of statement.declarationList.declarations) {
      if (declaration.name.getText(sourceFile) !== 'projects' || !declaration.initializer) continue
      if (!ts.isArrayLiteralExpression(declaration.initializer)) continue

      for (const element of declaration.initializer.elements) {
        if (!ts.isObjectLiteralExpression(element)) continue
        const idProperty = element.properties.find((property) => (
          ts.isPropertyAssignment(property) && property.name.getText(sourceFile) === 'id'
        ))

        if (idProperty && ts.isPropertyAssignment(idProperty) && ts.isStringLiteral(idProperty.initializer)) {
          ids.push(idProperty.initializer.text)
        }
      }
    }
  }

  if (!ids.length) throw new Error('Nenhum id de projeto foi encontrado em src/data/projects.ts.')
  if (new Set(ids).size !== ids.length) throw new Error('Existem ids de projeto duplicados em src/data/projects.ts.')
  return ids
}

async function readWebpDimensions(filePath) {
  const buffer = await readFile(filePath)
  if (buffer.toString('ascii', 0, 4) !== 'RIFF' || buffer.toString('ascii', 8, 12) !== 'WEBP') {
    throw new Error(`${relative(projectRoot, filePath)} não é um WebP válido.`)
  }

  const format = buffer.toString('ascii', 12, 16)
  if (format === 'VP8X') {
    return { width: 1 + buffer.readUIntLE(24, 3), height: 1 + buffer.readUIntLE(27, 3) }
  }

  if (format === 'VP8 ') {
    const sync = buffer.indexOf(Buffer.from([0x9d, 0x01, 0x2a]), 20)
    if (sync !== -1) {
      return {
        width: buffer.readUInt16LE(sync + 3) & 0x3fff,
        height: buffer.readUInt16LE(sync + 5) & 0x3fff,
      }
    }
  }

  if (format === 'VP8L' && buffer[20] === 0x2f) {
    const b1 = buffer[21]
    const b2 = buffer[22]
    const b3 = buffer[23]
    const b4 = buffer[24]
    return {
      width: 1 + b1 + ((b2 & 0x3f) << 8),
      height: 1 + ((b2 & 0xc0) >> 6) + (b3 << 2) + ((b4 & 0x0f) << 10),
    }
  }

  throw new Error(`Não foi possível ler as dimensões de ${relative(projectRoot, filePath)}.`)
}

function publicPath(filePath) {
  return `/${relative(join(projectRoot, 'public'), filePath).split(sep).join('/')}`
}

async function buildAsset(filePath) {
  const dimensions = await readWebpDimensions(filePath)
  return { src: publicPath(filePath), ...dimensions }
}

export function selectGalleryFiles(fileNames) {
  return fileNames
    .map((name) => ({ name, match: /^galeria-(\d{2,})\.webp$/.exec(name) }))
    .filter((entry) => entry.match)
    .map((entry) => ({ name: entry.name, index: Number(entry.match[1]) }))
    .sort((a, b) => a.index - b.index)
}

async function scanProject(projectId) {
  const folder = join(mediaRoot, projectId)
  const folderStats = await stat(folder).catch(() => null)
  if (!folderStats?.isDirectory()) {
    throw new Error(`Pasta ausente para o projeto "${projectId}": public/images/projects/${projectId}`)
  }

  const files = await readdir(folder, { withFileTypes: true })
  const fileNames = files.filter((entry) => entry.isFile()).map((entry) => entry.name)
  const coverName = fileNames.find((name) => name === 'capa.webp')
  if (!coverName) throw new Error(`Capa ausente para o projeto "${projectId}". Use o nome capa.webp.`)

  const galleryFiles = selectGalleryFiles(fileNames)

  const duplicateIndexes = galleryFiles.filter((entry, index) => (
    index > 0 && entry.index === galleryFiles[index - 1].index
  ))
  if (duplicateIndexes.length) {
    throw new Error(`Índices de galeria duplicados em "${projectId}".`)
  }

  const cover = await buildAsset(join(folder, coverName))
  const smallCoverName = fileNames.find((name) => name === 'capa-960.webp')
  const coverSmall = smallCoverName ? await buildAsset(join(folder, smallCoverName)) : undefined
  const gallery = await Promise.all(galleryFiles.map(async ({ name, index }) => ({
    ...(await buildAsset(join(folder, name))),
    index,
  })))

  return { cover, ...(coverSmall ? { coverSmall } : {}), gallery }
}

function serializeManifest(entries) {
  const serialized = JSON.stringify(Object.fromEntries(entries), null, 2)
  return `/* Este arquivo é gerado por scripts/generate-project-media-manifest.mjs. Não edite manualmente. */
export interface GeneratedMediaAsset {
  src: string
  width: number
  height: number
}

export interface GeneratedGalleryAsset extends GeneratedMediaAsset {
  index: number
}

export interface GeneratedProjectMedia {
  cover: GeneratedMediaAsset
  coverSmall?: GeneratedMediaAsset
  gallery: GeneratedGalleryAsset[]
}

export const projectMediaManifest: Record<string, GeneratedProjectMedia> = ${serialized}
`
}

export async function generateProjectMediaManifest() {
  const sourceText = await readFile(projectsSource, 'utf8')
  const projectIds = readProjectIds(sourceText)
  const rootEntries = await readdir(mediaRoot, { withFileTypes: true })
  const unknownFolders = rootEntries
    .filter((entry) => entry.isDirectory() && !projectIds.includes(entry.name))
    .map((entry) => entry.name)

  if (unknownFolders.length) {
    throw new Error(`Pastas sem projeto correspondente: ${unknownFolders.join(', ')}`)
  }

  const entries = []
  for (const projectId of projectIds) entries.push([projectId, await scanProject(projectId)])
  await writeFile(manifestOutput, serializeManifest(entries), 'utf8')
  return entries.length
}

if (resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url)) {
  const count = await generateProjectMediaManifest()
  console.log(`Manifesto de mídia gerado para ${count} projetos.`)
}
