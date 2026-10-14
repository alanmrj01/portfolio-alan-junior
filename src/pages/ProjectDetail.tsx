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
  const scope = project.eyebrow.split(' / ')[0]

  return <>
    <section className={`detail-hero detail-${project.visual}`}>
      <div className="container">
        <div className="detail-navigation page-enter">
          <Link className="back-link" to="/projetos"><ArrowLeft size={16}/> Todos os projetos</Link>
          <span>CASE {project.number} / {String(projects.length).padStart(2, '0')}</span>
        </div>
        <div className="detail-heading-grid">
          <div>
            <span className="detail-kicker page-enter">{project.category}</span>
            <h1 className="detail-title page-enter">{project.name}<span>.</span></h1>
          </div>
          <div className="detail-lead page-enter">
            <p>{project.subtitle}</p>
            <dl>
              <div><dt>Escopo</dt><dd>{scope}</dd></div>
              <div><dt>Formato</dt><dd>Estudo de caso</dd></div>
              <div><dt>Imagens</dt><dd>{project.image ? 'Disponíveis' : 'A definir'}</dd></div>
            </dl>
          </div>
        </div>
        <div className="detail-visual page-enter"><div data-parallax><PreviewArt project={project} large/></div></div>
      </div>
    </section>

    <section className="case-introduction container section-space">
      <span className="case-section-number" data-reveal>01 / VISÃO GERAL</span>
      <h2 data-reveal>{project.summary}</h2>
      <p data-reveal>{project.context}</p>
    </section>

    <section className="case-narrative container">
      <aside className="case-aside" aria-label="Capítulos do estudo de caso">
        <div>
          <span>CASE / {project.number}</span>
          <a href="#desafio">Desafio</a>
          <a href="#solucao">Solução</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#tecnologias">Tecnologias</a>
        </div>
      </aside>

      <div className="case-content">
        <article id="desafio" className="case-chapter">
          <div className="chapter-rule" data-line/>
          <span className="chapter-label" data-reveal>02 / O DESAFIO</span>
          <div className="chapter-copy" data-reveal><h2>O ponto de partida.</h2><p>{project.challenge}</p></div>
        </article>

        <article id="solucao" className="case-chapter case-chapter-accent">
          <span className="chapter-label" data-reveal>03 / A SOLUÇÃO</span>
          <div className="chapter-copy" data-reveal><h2>Uma resposta construída para o processo real.</h2><p>{project.solution}</p></div>
          <div className="solution-flow" data-reveal aria-label="Fluxo conceitual da solução">
            <div><span>01</span><strong>CONTEXTO</strong><p>Leitura do processo e das restrições.</p></div>
            <ChevronRight aria-hidden="true"/>
            <div><span>02</span><strong>LÓGICA</strong><p>Regras, dados e decisões técnicas.</p></div>
            <ChevronRight aria-hidden="true"/>
            <div><span>03</span><strong>EXECUÇÃO</strong><p>Aplicação da solução na operação.</p></div>
          </div>
        </article>

        <article id="funcionalidades" className="case-chapter">
          <div className="chapter-rule" data-line/>
          <span className="chapter-label" data-reveal>04 / POR DENTRO</span>
          <div className="chapter-copy" data-reveal><h2>Funcionalidades e decisões de produto.</h2></div>
          <div className="feature-list">{project.features.map((feature, featureIndex) => <div className="feature-item" data-reveal key={feature}><span>{String(featureIndex + 1).padStart(2, '0')}</span><p>{feature}</p><ArrowUpRight size={17}/></div>)}</div>
        </article>

        <article id="tecnologias" className="case-chapter">
          <div className="chapter-rule" data-line/>
          <span className="chapter-label" data-reveal>05 / TECNOLOGIA</span>
          <div className="chapter-copy" data-reveal><h2>Stack orientada pelo problema.</h2><p>Ferramentas e tecnologias registradas no escopo disponível deste case.</p></div>
          <div className="detail-technologies" data-reveal>{project.technologies.map((tech, techIndex) => <span key={tech}><i>{String(techIndex + 1).padStart(2, '0')}</i>{tech}</span>)}</div>
        </article>

        <article className="case-chapter case-contributions">
          <div className="chapter-rule" data-line/>
          <span className="chapter-label" data-reveal>06 / CONTRIBUIÇÕES</span>
          <div className="chapter-copy" data-reveal><h2>O valor técnico da solução.</h2></div>
          <div className="impact-grid">{project.impacts.map((value, impactIndex) => <div data-reveal key={value}><span>0{impactIndex + 1}</span><p>{value}</p></div>)}</div>
          {project.note && <div className="case-note" data-reveal><span>NOTA EDITORIAL</span><p>{project.note}</p></div>}
        </article>
      </div>
    </section>

    <Link to={`/projetos/${next.id}`} className="next-project" key={project.id} aria-label={`Próximo case: ${next.name}`}>
      <div className="container"><span>PRÓXIMO CASE / {next.number}</span><div><strong>{next.name}</strong><span className="next-arrow"><ArrowUpRight size={28}/></span></div></div>
    </Link>
  </>
}
