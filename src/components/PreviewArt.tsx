import type { PortfolioProject } from '../data/projects'

interface Props {
  project: PortfolioProject
  large?: boolean
}

export default function PreviewArt({ project, large = false }: Props) {
  const visualLabels = {
    system: ['DADOS', 'PROCESSOS', 'INTEGRAÇÕES'],
    ai: ['EVIDÊNCIA', 'REGRAS', 'DECISÃO'],
    analytics: ['FONTE', 'MODELO', 'INDICADOR'],
    automation: ['EVENTO', 'CONDIÇÃO', 'AÇÃO'],
    financial: ['REGISTROS', 'ANÁLISE', 'CONTROLE'],
    game: ['ESCOLHA', 'CENÁRIO', 'CONSEQUÊNCIA'],
  }
  const labels = visualLabels[project.visual]

  return (
    <div className={`preview-art art-${project.visual} ${large ? 'preview-art-large' : ''}`}>
      {project.image ? (
        <img src={project.image} alt={`Captura de tela do projeto ${project.name}`} loading="lazy" />
      ) : (
        <>
          <div className="art-topline"><span className="art-symbol">AM</span><span>CASE {project.number} / {project.category}</span><span className="art-cross">✳</span></div>
          <div className="art-ambient" aria-hidden="true">
            <span className="art-grid" /><span className="art-axis art-axis-x"/><span className="art-axis art-axis-y"/>
            <span className="art-orbit orbit-one"/><span className="art-orbit orbit-two"/>
            <span className="art-node node-one"/><span className="art-node node-two"/><span className="art-node node-three"/>
            <span className="art-signal signal-one"/><span className="art-signal signal-two"/><span className="art-signal signal-three"/>
          </div>
          <div className="art-content">
            <span className="art-eyebrow">{project.eyebrow}</span>
            {!large && <h3>{project.name}</h3>}
            {large && <p>{project.summary}</p>}
          </div>
          <div className="art-legend" aria-hidden="true">{labels.map((label, index) => <span key={label}><i>{String(index + 1).padStart(2, '0')}</i>{label}</span>)}</div>
        </>
      )}
    </div>
  )
}
