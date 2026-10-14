import { useMemo, useState } from 'react'
import { categories, projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('Todos')
  const filtered = useMemo(() => filter === 'Todos' ? projects : projects.filter(project => project.category === filter), [filter])
  return <>
    <section className="page-hero container"><span className="eyebrow page-enter">[ PORTFÓLIO / CASES ]</span><h1 className="page-title page-enter">SOLUÇÕES<br/><em>EM CONTEXTO.</em></h1><div className="page-subline page-enter"><p>Projetos em IA, Business Intelligence, automação e software — apresentados com contexto, decisões técnicas e escopo verificável.</p><span>{String(projects.length).padStart(2,'0')} ESTUDOS DE CASO</span></div></section>
    <section className="project-listing container section-space-small"><div className="filter-list" role="group" aria-label="Filtrar projetos">
      {categories.map(category => <button type="button" key={category} onClick={() => setFilter(category)} className={`filter-pill ${filter === category ? 'selected' : ''}`} aria-pressed={filter === category}>{category}<span>{category === 'Todos' ? projects.length : projects.filter(p => p.category === category).length}</span></button>)}
    </div><div className="listing-status" aria-live="polite"><span>{String(filtered.length).padStart(2, '0')} cases</span><i data-line/></div><div className="projects-grid filtered-grid" key={filter}>{filtered.map(project => <ProjectCard key={project.id} project={project}/>)}</div></section>
  </>
}
