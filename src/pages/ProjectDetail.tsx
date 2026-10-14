import { useMemo } from 'react'
import { ArrowLeft, ArrowUpRight, ChevronRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import PreviewArt from '../components/PreviewArt'
import { projects } from '../data/projects'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = useMemo(() => projects.find(item => item.id === id), [id])
  if (!project) return <NotFound />
  const index = projects.findIndex(item => item.id === id)
  const next = projects[(index + 1) % projects.length]
  return <>
    <section className="detail-hero container">
      <Link className="back-link page-enter" to="/projetos"><ArrowLeft size={17}/> Voltar aos projetos</Link>
      <div className="detail-eyebrow page-enter"><span>CASE / {project.number}</span><span>{project.category}</span></div>
      <h1 className="detail-title page-enter">{project.name}<span>.</span></h1>
      <div className="detail-lead page-enter"><p>{project.subtitle}</p><span>{project.eyebrow}</span></div>
      <div className="detail-visual page-enter"><PreviewArt project={project} large/></div>
    </section>
    <section className="case-body container section-space">
      <div className="case-layout"><div className="case-label" data-reveal><span>[ 01 / VISÃO GERAL ]</span><span className="case-decoration">✳</span></div><div className="case-copy" data-reveal><h2>{project.summary}</h2><p>{project.context}</p></div></div>
      <div className="case-rule"/>
      <div className="case-layout"><div className="case-label" data-reveal>[ 02 / DESAFIO ]</div><div className="case-copy" data-reveal><h3>O PROBLEMA.</h3><p>{project.challenge}</p></div></div>
      <div className="case-rule"/>
      <div className="case-layout"><div className="case-label" data-reveal>[ 03 / SOLUÇÃO ]</div><div className="case-copy" data-reveal><h3>A ABORDAGEM.</h3><p>{project.solution}</p></div></div>
      <div className="case-rule"/>
      <div className="case-layout"><div className="case-label" data-reveal>[ 04 / FUNCIONALIDADES ]</div><div className="case-copy" data-reveal><h3>POR DENTRO<br/>DO PROJETO.</h3><div className="feature-list">{project.features.map((feature, i) => <div className="feature-item" key={feature}><span>{String(i + 1).padStart(2,'0')}</span><p>{feature}</p><ChevronRight size={16}/></div>)}</div></div></div>
      <div className="case-rule"/>
      <div className="case-layout"><div className="case-label" data-reveal>[ 05 / TECNOLOGIAS ]</div><div className="case-copy" data-reveal><h3>STACK &<br/>FERRAMENTAS.</h3><div className="detail-technologies">{project.technologies.map(tech => <span key={tech}>{tech} <ArrowUpRight size={13}/></span>)}</div></div></div>
      <div className="case-rule"/>
      <div className="case-layout"><div className="case-label" data-reveal>[ 06 / CONTRIBUIÇÕES ]</div><div className="case-copy" data-reveal><h3>VALOR<br/>DA SOLUÇÃO.</h3><div className="impact-grid">{project.impacts.map((value, i) => <div key={value}><span>0{i+1}</span><p>{value}</p></div>)}</div>{project.note && <p className="case-note">Nota editorial: {project.note}</p>}</div></div>
    </section>
    <Link to={`/projetos/${next.id}`} className="next-project" key={project.id}><div className="container"><span>PRÓXIMO CASE / {next.number}</span><div><strong>{next.name}</strong><ArrowUpRight size={38}/></div></div></Link>
  </>
}
