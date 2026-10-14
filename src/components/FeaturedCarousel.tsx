import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import type { PortfolioProject } from '../data/projects'
import PreviewArt from './PreviewArt'

interface Props {
  projects: PortfolioProject[]
}

function circularOffset(index: number, active: number, total: number) {
  let offset = index - active
  if (offset > total / 2) offset -= total
  if (offset < -total / 2) offset += total
  return offset
}

export default function FeaturedCarousel({ projects }: Props) {
  const [active, setActive] = useState(0)
  const stageRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([])
  const pointerStart = useRef<number | null>(null)
  const activeProject = projects[active]

  const goTo = useCallback((index: number) => {
    setActive((index + projects.length) % projects.length)
  }, [projects.length])

  useLayoutEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const stageWidth = stage.clientWidth
    const cardWidth = cardRefs.current[active]?.offsetWidth ?? Math.min(stageWidth * .3, 430)
    const isMobile = stageWidth < 700
    const step = isMobile ? cardWidth * .88 : Math.min(stageWidth * .255, cardWidth * .84)
    const anchor = isMobile ? stageWidth * .5 : active === 0 ? Math.min(stageWidth * .25, 390) : stageWidth * .5

    cardRefs.current.forEach((card, index) => {
      if (!card) return
      const offset = circularOffset(index, active, projects.length)
      const distance = Math.abs(offset)
      const visible = distance <= 2 || (active === 0 && offset === 3)
      gsap.to(card, {
        x: anchor + (offset * step) - (cardWidth / 2),
        y: distance === 0 ? 12 : 48 + distance * 8,
        scale: distance === 0 ? 1 : Math.max(.7, .88 - distance * .07),
        autoAlpha: visible ? (distance === 0 ? 1 : Math.max(.34, .74 - distance * .17)) : 0,
        filter: distance === 0 ? 'brightness(1)' : `brightness(${Math.max(.42, .72 - distance * .1)})`,
        zIndex: 20 - distance,
        duration: reduced ? 0 : .82,
        ease: 'power3.inOut',
        overwrite: true,
      })
    })
  }, [active, projects.length])

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    pointerStart.current = event.clientX
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (pointerStart.current === null) return
    const delta = event.clientX - pointerStart.current
    pointerStart.current = null
    if (Math.abs(delta) > 54) goTo(active + (delta < 0 ? 1 : -1))
  }

  return (
    <div
      className="works-carousel"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Projetos em destaque"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') goTo(active - 1)
        if (event.key === 'ArrowRight') goTo(active + 1)
      }}
    >
      <div
        ref={stageRef}
        className="carousel-stage"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { pointerStart.current = null }}
      >
        <span className="works-vertical-label" aria-hidden="true">LATEST WORKS</span>
        {projects.map((project, index) => (
          <Link
            className={`carousel-card ${index === active ? 'is-active' : ''}`}
            key={project.id}
            to={`/projetos/${project.id}`}
            ref={(node) => { cardRefs.current[index] = node }}
            aria-hidden={index !== active}
            tabIndex={index === active ? 0 : -1}
            onClick={(event) => {
              if (index !== active) {
                event.preventDefault()
                goTo(index)
              }
            }}
          >
            <PreviewArt project={project} priority={index === 0} />
            <span className="carousel-card-number">{project.number}</span>
          </Link>
        ))}
        <button className="carousel-arrow carousel-arrow-prev" type="button" onClick={() => goTo(active - 1)} aria-label="Projeto anterior"><ArrowLeft /></button>
        <button className="carousel-arrow carousel-arrow-next" type="button" onClick={() => goTo(active + 1)} aria-label="Próximo projeto"><ArrowRight /></button>
      </div>

      <div className="carousel-copy" aria-live="polite">
        <div>
          <span className="carousel-category">{activeProject.category} / {activeProject.number}</span>
          <h3>{activeProject.name}</h3>
          <p>{activeProject.summary}</p>
        </div>
        <div className="carousel-tags">
          {activeProject.technologies.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <Link className="carousel-case-link" to={`/projetos/${activeProject.id}`}>Ver estudo de caso <ArrowUpRight size={17} /></Link>
      </div>

      <div className="carousel-footer">
        <div className="carousel-progress" role="tablist" aria-label="Selecionar projeto">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={index === active ? 'is-active' : ''}
              onClick={() => goTo(index)}
              role="tab"
              aria-selected={index === active}
              aria-label={`Abrir ${project.name}`}
            />
          ))}
        </div>
        <Link className="button button-dark" to="/projetos">Todos os projetos <ArrowUpRight size={18} /></Link>
      </div>
    </div>
  )
}
