import type { PortfolioProject } from '../data/projects'
import { getProjectMedia } from '../data/projectMedia'

interface Props {
  project: PortfolioProject
  featured?: boolean
  large?: boolean
  priority?: boolean
}

export default function PreviewArt({ project, featured = false, large = false, priority = false }: Props) {
  const media = getProjectMedia(project)
  const image = featured && media.gallery.length
    ? media.gallery.find((item) => item.index === project.featuredGalleryImage) ?? media.gallery[0]
    : media.cover

  return (
    <figure className={`project-photo ${featured ? 'project-photo-real' : ''} ${large ? 'project-photo-large' : ''}`}>
      <picture>
        {image.smallSrc && <source media="(max-width: 720px)" srcSet={image.smallSrc} />}
        <img
          src={image.src}
          srcSet={image.smallSrc ? `${image.smallSrc} ${image.smallWidth ?? 960}w, ${image.src} ${image.width}w` : undefined}
          sizes={large ? '(max-width: 800px) 100vw, 88vw' : '(max-width: 720px) 88vw, 38vw'}
          alt={featured ? `${project.name} — tela real da aplicação` : project.imageAlt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          width={image.width}
          height={image.height}
          style={{ objectPosition: featured ? 'center' : project.imagePosition ?? 'center' }}
        />
      </picture>
    </figure>
  )
}
