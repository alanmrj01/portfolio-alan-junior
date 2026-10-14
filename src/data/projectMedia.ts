import { projectMediaManifest, type GeneratedMediaAsset } from './projectMedia.generated'
import type { PortfolioProject } from './projects'

export interface ProjectMediaItem extends GeneratedMediaAsset {
  alt: string
  index: number
  kind: 'cover' | 'gallery'
  smallSrc?: string
  smallWidth?: number
}

export interface ProjectMediaCollection {
  cover: ProjectMediaItem
  gallery: ProjectMediaItem[]
  all: ProjectMediaItem[]
}

export function getProjectMedia(project: PortfolioProject): ProjectMediaCollection {
  const generated = projectMediaManifest[project.id]
  if (!generated) throw new Error(`Mídia não encontrada para o projeto "${project.id}".`)

  const cover: ProjectMediaItem = {
    ...generated.cover,
    alt: project.imageAlt,
    index: 0,
    kind: 'cover',
    smallSrc: generated.coverSmall?.src,
    smallWidth: generated.coverSmall?.width,
  }
  const gallery = generated.gallery.map((asset) => ({
    ...asset,
    alt: `${project.name} — imagem complementar ${String(asset.index).padStart(2, '0')}`,
    kind: 'gallery' as const,
  }))

  return { cover, gallery, all: [cover, ...gallery] }
}
