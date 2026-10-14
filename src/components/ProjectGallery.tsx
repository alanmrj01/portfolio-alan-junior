import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, RotateCcw, X, ZoomIn, ZoomOut } from 'lucide-react'
import { createPortal } from 'react-dom'
import { getProjectMedia, type ProjectMediaItem } from '../data/projectMedia'
import type { PortfolioProject } from '../data/projects'

const MIN_ZOOM = 1
const MAX_ZOOM = 3

function responsiveSource(item: ProjectMediaItem) {
  return item.smallSrc ? `${item.smallSrc} ${item.smallWidth ?? 960}w, ${item.src} ${item.width}w` : undefined
}

export default function ProjectGallery({ project }: { project: PortfolioProject }) {
  const media = getProjectMedia(project)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [zoom, setZoom] = useState(MIN_ZOOM)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const openerRef = useRef<HTMLButtonElement | null>(null)
  const pointer = useRef<{ id: number; x: number; y: number; originX: number; originY: number } | null>(null)

  const close = () => setActiveIndex(null)
  const resetView = () => {
    setZoom(MIN_ZOOM)
    setOffset({ x: 0, y: 0 })
  }
  const open = (index: number, opener: HTMLButtonElement) => {
    openerRef.current = opener
    resetView()
    setActiveIndex(index)
  }
  const move = (direction: number) => {
    if (activeIndex === null || media.all.length < 2) return
    resetView()
    setActiveIndex((activeIndex + direction + media.all.length) % media.all.length)
  }
  const changeZoom = (amount: number) => {
    setZoom((current) => {
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, current + amount))
      if (next === MIN_ZOOM) setOffset({ x: 0, y: 0 })
      return next
    })
  }

  useEffect(() => {
    if (activeIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') move(-1)
      if (event.key === 'ArrowRight') move(1)
      if (event.key === '+' || event.key === '=') changeZoom(.5)
      if (event.key === '-') changeZoom(-.5)

      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button:not(:disabled), a[href]'))
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      openerRef.current?.focus()
    }
  }, [activeIndex, media.all.length])

  const activeItem = activeIndex === null ? null : media.all[activeIndex]

  return (
    <>
      <div className={`project-gallery ${media.gallery.length ? 'has-gallery' : 'is-cover-only'}`}>
        {media.all.map((item, index) => (
          <button
            className={`project-gallery-item ${index === 0 ? 'project-gallery-primary project-photo' : ''}`}
            type="button"
            key={item.src}
            onClick={(event) => open(index, event.currentTarget)}
            aria-label={`Ampliar ${item.alt}`}
          >
            <picture>
              {item.smallSrc && <source media="(max-width: 720px)" srcSet={item.smallSrc} />}
              <img
                src={item.src}
                srcSet={responsiveSource(item)}
                sizes={index === 0 ? '(max-width: 800px) 100vw, 88vw' : '(max-width: 720px) 100vw, 44vw'}
                alt={item.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                decoding="async"
                width={item.width}
                height={item.height}
                style={{ objectPosition: project.imagePosition ?? 'center' }}
              />
            </picture>
            <span className="contextual-image-label">Imagem contextual</span>
            <span className="project-gallery-expand"><ZoomIn size={18} /> Ampliar</span>
          </button>
        ))}
      </div>
      <p className="photo-credit">Fotografia de capa contextual por <a href={project.photoCredit.sourceUrl} target="_blank" rel="noreferrer">{project.photoCredit.author} / Pexels</a> — <a href={project.photoCredit.licenseUrl} target="_blank" rel="noreferrer">licença</a>.</p>

      {activeItem && createPortal(
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria de ${project.name}`}
          ref={dialogRef}
        >
          <div className="project-lightbox-backdrop" onClick={close} aria-hidden="true" />
          <div className="project-lightbox-toolbar">
            <span aria-live="polite">{(activeIndex ?? 0) + 1} / {media.all.length}</span>
            <div>
              <button type="button" onClick={() => changeZoom(-.5)} disabled={zoom <= MIN_ZOOM} aria-label="Diminuir zoom"><ZoomOut /></button>
              <button type="button" onClick={resetView} disabled={zoom === MIN_ZOOM} aria-label="Restaurar zoom"><RotateCcw /></button>
              <button type="button" onClick={() => changeZoom(.5)} disabled={zoom >= MAX_ZOOM} aria-label="Aumentar zoom"><ZoomIn /></button>
              <button type="button" onClick={close} aria-label="Fechar galeria" ref={closeRef}><X /></button>
            </div>
          </div>

          {media.all.length > 1 && <button className="project-lightbox-arrow is-previous" type="button" onClick={() => move(-1)} aria-label="Imagem anterior"><ChevronLeft /></button>}
          <div
            className={`project-lightbox-stage ${zoom > MIN_ZOOM ? 'is-zoomed' : ''}`}
            onWheel={(event) => {
              event.preventDefault()
              changeZoom(event.deltaY < 0 ? .25 : -.25)
            }}
            onPointerDown={(event) => {
              pointer.current = { id: event.pointerId, x: event.clientX, y: event.clientY, originX: offset.x, originY: offset.y }
              event.currentTarget.setPointerCapture(event.pointerId)
            }}
            onPointerMove={(event) => {
              if (!pointer.current || pointer.current.id !== event.pointerId || zoom === MIN_ZOOM) return
              setOffset({
                x: pointer.current.originX + event.clientX - pointer.current.x,
                y: pointer.current.originY + event.clientY - pointer.current.y,
              })
            }}
            onPointerUp={(event) => {
              if (pointer.current && zoom === MIN_ZOOM) {
                const delta = event.clientX - pointer.current.x
                if (Math.abs(delta) > 54) move(delta < 0 ? 1 : -1)
              }
              pointer.current = null
            }}
            onPointerCancel={() => { pointer.current = null }}
          >
            <img
              src={activeItem.src}
              alt={activeItem.alt}
              width={activeItem.width}
              height={activeItem.height}
              draggable="false"
              style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})` }}
            />
          </div>
          {media.all.length > 1 && <button className="project-lightbox-arrow is-next" type="button" onClick={() => move(1)} aria-label="Próxima imagem"><ChevronRight /></button>}
          <p className="project-lightbox-caption">{activeItem.alt}</p>
        </div>,
        document.body,
      )}
    </>
  )
}
