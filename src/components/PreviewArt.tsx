import type { PortfolioProject } from '../data/projects'

interface Props {
  project: PortfolioProject
  large?: boolean
  priority?: boolean
}

export default function PreviewArt({ project, large = false, priority = false }: Props) {
  return (
    <figure className={`project-photo ${large ? 'project-photo-large' : ''}`}>
      <picture>
        <source media="(max-width: 720px)" srcSet={project.imageSmall} />
        <img
          src={project.image}
          srcSet={`${project.imageSmall} 960w, ${project.image} 1600w`}
          sizes={large ? '(max-width: 800px) 100vw, 88vw' : '(max-width: 720px) 88vw, 38vw'}
          alt={project.imageAlt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          width="1600"
          height="1000"
          style={{ objectPosition: project.imagePosition ?? 'center' }}
        />
      </picture>
      <span className="contextual-image-label">Imagem contextual</span>
    </figure>
  )
}
