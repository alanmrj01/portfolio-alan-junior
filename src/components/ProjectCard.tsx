import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { PortfolioProject } from '../data/projects'
import PreviewArt from './PreviewArt'

export default function ProjectCard({ project, compact = false }: { project: PortfolioProject; compact?: boolean }) {
  return <Link className={`project-card ${compact ? 'compact' : ''} ${project.featured ? 'is-featured' : ''}`} to={`/projetos/${project.id}`} data-reveal="project" aria-label={`Abrir estudo de caso: ${project.name}`}>
    <div className="project-image-wrap"><PreviewArt project={project} /><span className="project-link-icon"><span>Ver case</span><ArrowUpRight size={19}/></span></div>
    <div className="project-meta"><span>{project.category}</span><span>{project.number} / {project.featured ? 'DESTAQUE' : 'CASE'}</span></div>
    <div className="project-card-copy">
      <h2>{project.name}</h2>
      <p className="project-summary">{project.summary}</p>
      <div className="project-technologies">{project.technologies.slice(0, compact ? 3 : 4).map(tech => <span key={tech}>{tech}</span>)}</div>
    </div>
  </Link>
}
