import { useMemo } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ProjectGallery from '../components/ProjectGallery'
import { getProjectMedia } from '../data/projectMedia'
import { projects } from '../data/projects'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = useMemo(() => projects.find((item) => item.id === id), [id])
  if (!project) return <NotFound />

  const index = projects.findIndex((item) => item.id === id)
  const next = projects[(index + 1) % projects.length]
  const currentMedia = getProjectMedia(project)
  const nextCover = getProjectMedia(next).cover

  return (
    <>
      <article className="case-page">
        <header className="case-opening">
          <div className="case-opening-grid">
            <aside className="case-opening-copy">
              <div className="case-opening-copy-inner">
                <div className="case-opening-nav page-enter">
                  <Link to="/projetos"><ArrowLeft size={16} /> Todos os projetos</Link>
                  <span>CASE {project.number} / {String(projects.length).padStart(2, '0')}</span>
                </div>
                <span className="section-label page-enter">{project.category}</span>
                <h1 className="page-enter">{project.name}</h1>
                <p className="page-enter">{project.summary}</p>
                <div className="case-opening-tags page-enter">{project.technologies.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}</div>

                <div className="case-service-scope page-enter">
                  <span className="case-section-label">ESCOPO DA SOLUÇÃO</span>
                  <ul>{project.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul>
                </div>

                <div className="case-opening-index page-enter">
                  <span>{project.number}</span>
                  <p>{project.subtitle}</p>
                </div>

                <p className="case-cover-credit page-enter">Capa contextual por <a href={project.photoCredit.sourceUrl} target="_blank" rel="noreferrer">{project.photoCredit.author} / Pexels</a> — <a href={project.photoCredit.licenseUrl} target="_blank" rel="noreferrer">licença</a>.</p>
              </div>
            </aside>

            <div className="case-opening-media page-enter">
              <div className="case-media-topline">
                <span>APLICAÇÃO / VISÃO DEMONSTRATIVA</span>
                <span>{currentMedia.gallery.length || 1} {currentMedia.gallery.length === 1 ? 'IMAGEM' : 'IMAGENS'}</span>
              </div>
              <div className="case-cover">
                <ProjectGallery project={project} />
              </div>
            </div>
          </div>
        </header>

        <section className="case-section container case-challenge-solution">
          <div data-reveal>
            <span className="case-section-label">01 / O DESAFIO</span>
            <h2>O que precisava ser resolvido.</h2>
            <p>{project.challenge}</p>
          </div>
          <div data-reveal>
            <span className="case-section-label">02 / A SOLUÇÃO</span>
            <h2>O que foi desenvolvido.</h2>
            <p>{project.solution}</p>
          </div>
        </section>

        <section className="case-section case-highlights">
          <div className="container">
            <div className="case-section-heading" data-reveal>
              <span className="case-section-label">03 / DESTAQUES TÉCNICOS</span>
              <h2>Decisões e funções centrais.</h2>
              <p>{project.context}</p>
            </div>
            <div className="case-highlight-list">
              {project.features.map((feature, featureIndex) => (
                <div className="case-highlight-item" key={feature} data-reveal>
                  <span>{String(featureIndex + 1).padStart(2, '0')}</span>
                  <p>{feature}</p>
                  <ArrowUpRight size={17} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section container case-tech-deliveries">
          <div data-reveal>
            <span className="case-section-label">04 / TECNOLOGIAS</span>
            <h2>Stack utilizada.</h2>
            <div className="case-tech-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          </div>
          <div data-reveal>
            <span className="case-section-label">05 / ENTREGAS E CONTRIBUIÇÕES</span>
            <h2>Efeitos documentados no escopo.</h2>
            <ul>{project.impacts.map((impact) => <li key={impact}>{impact}</li>)}</ul>
          </div>
        </section>
      </article>

      <Link to={`/projetos/${next.id}`} className="next-case" aria-label={`Próximo projeto: ${next.name}`}>
        <img src={nextCover.smallSrc ?? nextCover.src} alt="" loading="lazy" width={nextCover.width} height={nextCover.height} style={{ objectPosition: next.imagePosition ?? 'center' }} />
        <span className="next-case-overlay" />
        <div className="container">
          <span>PRÓXIMO PROJETO / {next.number}</span>
          <strong>{next.name}</strong>
          <i><ArrowUpRight size={28} /></i>
        </div>
      </Link>
    </>
  )
}
