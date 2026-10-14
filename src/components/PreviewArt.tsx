import type { PortfolioProject } from '../data/projects'

interface Props {
  project: PortfolioProject
  large?: boolean
}

export default function PreviewArt({ project, large = false }: Props) {
  return (
    <div className={`preview-art art-${project.visual} ${large ? 'preview-art-large' : ''}`} aria-label={`Área reservada à imagem de ${project.name}`}>
      {project.image ? (
        <img src={project.image} alt={`Captura de tela do projeto ${project.name}`} loading="lazy" />
      ) : (
        <>
          <div className="art-topline"><span className="art-symbol">A/</span><span>CASE STUDY / {project.number}</span><span className="art-cross">✳</span></div>
          <div className="art-ambient" aria-hidden="true">
            <span className="art-ring ring-one" /><span className="art-ring ring-two" /><span className="art-ring ring-three" />
            <span className="art-grid" />
          </div>
          <div className="art-content">
            <span className="art-eyebrow">{project.eyebrow}</span>
            <strong>{project.name}</strong>
            <span className="art-status"><i /> VISUAL EM PREPARAÇÃO</span>
          </div>
          <span className="art-corner-mark" aria-hidden="true">↗</span>
        </>
      )}
    </div>
  )
}
