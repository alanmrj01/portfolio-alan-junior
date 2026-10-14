import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollEffects() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return
    const context = gsap.context(() => {
      gsap.fromTo('.page-enter', { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.95, stagger: 0.09, ease: 'power3.out', delay: 0.12 })
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(el, { autoAlpha: 0, y: 46 }, {
          autoAlpha: 1, y: 0, duration: 0.95, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 93%', once: true }
        })
      })
    })
    ScrollTrigger.refresh()
    return () => context.revert()
  }, [pathname])
  return null
}
