import { useEffect, useLayoutEffect } from 'react'
import { flushSync } from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollEffects() {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const handleInternalNavigation = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href]')
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return
      const destination = new URL(anchor.href, window.location.href)
      if (destination.origin !== window.location.origin || destination.protocol !== 'http:' && destination.protocol !== 'https:') return
      const current = `${window.location.pathname}${window.location.search}`
      const next = `${destination.pathname}${destination.search}`
      if (next === current) return
      event.preventDefault()

      const go = () => {
        navigate(`${next}${destination.hash}`)
      }
      if (reducedMotion) {
        go()
        return
      }

      const source = anchor.closest('.project-card')
      source?.classList.add('is-transition-source')
      const transitionDocument = document as Document & {
        startViewTransition?: (callback: () => void) => { finished: Promise<void> }
      }

      if (transitionDocument.startViewTransition) {
        const transition = transitionDocument.startViewTransition(() => flushSync(go))
        transition.finished.finally(() => source?.classList.remove('is-transition-source'))
        return
      }

      gsap.to('.route-curtain', { yPercent: 0, duration: .36, ease: 'power3.inOut', onComplete: go })
    }

    document.addEventListener('click', handleInternalNavigation)
    return () => document.removeEventListener('click', handleInternalNavigation)
  }, [navigate])

  useLayoutEffect(() => {
    const moveToDestination = () => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start', behavior: 'auto' })
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }
    }
    moveToDestination()
    const scrollFrame = window.requestAnimationFrame(moveToDestination)
    const scrollTimer = window.setTimeout(moveToDestination, 90)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      gsap.set('.route-curtain', { yPercent: -102 })
      return () => {
        window.cancelAnimationFrame(scrollFrame)
        window.clearTimeout(scrollTimer)
      }
    }
    const context = gsap.context(() => {
      gsap.fromTo('.route-curtain', { yPercent: 0 }, { yPercent: -102, duration: .72, ease: 'power4.inOut' })
      gsap.fromTo('.page-enter', { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 1.05, stagger: 0.075, ease: 'power3.out', delay: 0.2 })
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        const type = el.dataset.reveal
        const from = type === 'project'
          ? { autoAlpha: 0, y: 64, scale: .985 }
          : type === 'stack'
            ? { autoAlpha: 0, y: 26, scale: .9 }
            : type === 'service'
              ? { autoAlpha: 0, y: 54, rotateX: 5 }
              : { autoAlpha: 0, y: 42 }
        gsap.fromTo(el, from, {
          autoAlpha: 1, y: 0, scale: 1, rotateX: 0, duration: type === 'project' ? 1.15 : .9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 91%', once: true }
        })
      })
      gsap.utils.toArray<HTMLElement>('[data-line]').forEach((el) => {
        gsap.fromTo(el, { scaleX: 0, transformOrigin: 'left center' }, {
          scaleX: 1, duration: 1.15, ease: 'power3.inOut',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true }
        })
      })
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        gsap.fromTo(el, { yPercent: -3 }, {
          yPercent: 3, ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: .8 }
        })
      })
    })
    ScrollTrigger.refresh()
    return () => {
      window.cancelAnimationFrame(scrollFrame)
      window.clearTimeout(scrollTimer)
      context.revert()
    }
  }, [pathname, hash])
  return null
}
