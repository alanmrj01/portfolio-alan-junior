import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { PortfolioProject } from '../data/projects'
import PreviewArt from './PreviewArt'

export default function ProjectCard({ project, compact = false }: { project: PortfolioProject; compact?: boolean }) {
  return <Link className={`project-card ${compact ? 'compact' : ''}`} to={`/projetos/${project.id}`} data-reveal>
    <div className="project-image-wrap"><PreviewArt project={project} /><span className="project-link-icon"><ArrowUpRight size={23}/></span></div>
    <div className="project-meta"><span>{project.category}</span><span>/{project.number}</span></div>
    <h3 className="project-name">{project.name}</h3>
    <p className="project-summary">{project.summary}</p>
    <div className="project-technologies">{project.technologies.slice(0, compact ? 3 : 5).map(tech => <span key={tech}>{tech}</span>)}</div>
  </Link>
}
