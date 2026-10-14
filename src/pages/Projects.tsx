import { useMemo, useState } from 'react'
import { categories, projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('Todos')
  const filtered = useMemo(() => filter === 'Todos' ? projects : projects.filter(project => project.category === filter), [filter])
  return <>
    <section className="page-hero container"><span className="eyebrow page-enter">[ PORTFÓLIO / CASES ]</span><h1 className="page-title page-enter">IDEIAS EM<br/><em>MOVIMENTO.</em></h1><div className="page-subline page-enter"><p>Uma seleção de soluções em IA, Business Intelligence, automação, software e experiências interativas.</p><span>{String(projects.length).padStart(2,'0')} PROJETOS</span></div></section>
    <section className="project-listing container section-space-small"><div className="filter-list" role="group" aria-label="Filtrar projetos">
      {categories.map(category => <button type="button" key={category} onClick={() => setFilter(category)} className={`filter-pill ${filter === category ? 'selected' : ''}`} aria-pressed={filter === category}>{category}<span>{category === 'Todos' ? projects.length : projects.filter(p => p.category === category).length}</span></button>)}
    </div><div className="projects-grid filtered-grid" key={filter}>{filtered.map(project => <ProjectCard key={project.id} project={project}/>)}</div></section>
  </>
}
