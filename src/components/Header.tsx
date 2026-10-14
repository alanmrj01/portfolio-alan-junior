import { useEffect, useState } from 'react'
import { Linkedin, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const homeLinks = [
  { id: 'inicio', text: 'Início' },
  { id: 'sobre', text: 'Sobre' },
  { id: 'servicos', text: 'Serviços' },
  { id: 'contato', text: 'Contato' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const { pathname } = useLocation()
  useEffect(() => { setIsOpen(false) }, [pathname])
  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => { if (event.key === 'Escape') setIsOpen(false) }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])
  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isOpen])
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 72)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    if (pathname !== '/') return
    const sections = homeLinks.map((link) => document.getElementById(link.id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target.id) setActiveSection(visible.target.id)
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, .2, .45] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  return <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
    <div className="header-inner container">
      <Link to="/" className="logo" aria-label="Alan Magalhães, início"><span className="logo-mark" aria-hidden="true"><span>A</span><span>M</span></span><span className="logo-name">ALAN<br/>MAGALHÃES</span></Link>
      <nav id="main-navigation" className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
        {homeLinks.slice(0, 1).map((link) => <a key={link.id} href={pathname === '/' ? `#${link.id}` : `/#${link.id}`} className={`nav-link ${pathname === '/' && activeSection === link.id ? 'active' : ''}`}>{link.text}</a>)}
        <Link to="/projetos" className={`nav-link ${pathname.startsWith('/projetos') ? 'active' : ''}`}>Projetos</Link>
        {homeLinks.slice(1).map((link) => <a key={link.id} href={pathname === '/' ? `#${link.id}` : `/#${link.id}`} className={`nav-link ${pathname === '/' && activeSection === link.id ? 'active' : ''}`}>{link.text}</a>)}
      </nav>
      <a href="https://www.linkedin.com/in/alan-de-magalh%C3%A3es-614927260" target="_blank" rel="noreferrer" className="header-social" aria-label="LinkedIn de Alan Magalhães"><Linkedin size={18} /></a>
      <button type="button" className="menu-button" aria-controls="main-navigation" aria-expanded={isOpen} aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setIsOpen(v => !v)}>{isOpen ? <X size={23}/> : <Menu size={23}/>}</button>
    </div>
  </header>
}
