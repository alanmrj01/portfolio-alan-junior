import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const execFileAsync = promisify(execFile)

async function generateMediaManifest() {
  await execFileAsync(process.execPath, ['scripts/generate-project-media-manifest.mjs'], { cwd: process.cwd() })
}

function projectMediaManifestPlugin(): Plugin {
  const mediaRoot = resolve(process.cwd(), 'public/images/projects')

  return {
    name: 'project-media-manifest',
    async buildStart() {
      await generateMediaManifest()
    },
    configureServer(server) {
      let timer: ReturnType<typeof setTimeout> | undefined
      const refresh = (filePath: string) => {
        if (!resolve(filePath).startsWith(mediaRoot)) return
        clearTimeout(timer)
        timer = setTimeout(async () => {
          try {
            await generateMediaManifest()
            server.ws.send({ type: 'full-reload' })
          } catch (error) {
            server.config.logger.error(error instanceof Error ? error.message : String(error))
          }
        }, 120)
      }

      server.watcher.add(mediaRoot)
      server.watcher.on('add', refresh)
      server.watcher.on('change', refresh)
      server.watcher.on('unlink', refresh)
      server.httpServer?.once('close', () => {
        clearTimeout(timer)
        server.watcher.off('add', refresh)
        server.watcher.off('change', refresh)
        server.watcher.off('unlink', refresh)
      })
    },
  }
}

export default defineConfig({ plugins: [projectMediaManifestPlugin(), react()] })
