import type { PortfolioProject } from '../data/projects'
import { getProjectMedia } from '../data/projectMedia'

interface Props {
  project: PortfolioProject
  large?: boolean
  priority?: boolean
}

export default function PreviewArt({ project, large = false, priority = false }: Props) {
  const { cover } = getProjectMedia(project)

  return (
    <figure className={`project-photo ${large ? 'project-photo-large' : ''}`}>
      <picture>
        {cover.smallSrc && <source media="(max-width: 720px)" srcSet={cover.smallSrc} />}
        <img
          src={cover.src}
          srcSet={cover.smallSrc ? `${cover.smallSrc} ${cover.smallWidth ?? 960}w, ${cover.src} ${cover.width}w` : undefined}
          sizes={large ? '(max-width: 800px) 100vw, 88vw' : '(max-width: 720px) 88vw, 38vw'}
          alt={project.imageAlt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          width={cover.width}
          height={cover.height}
          style={{ objectPosition: project.imagePosition ?? 'center' }}
        />
      </picture>
      <span className="contextual-image-label">Imagem contextual</span>
    </figure>
  )
}
