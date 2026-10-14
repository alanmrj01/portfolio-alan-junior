import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', text: 'Início', end: true },
  { to: '/projetos', text: 'Projetos', end: false },
  { to: '/sobre', text: 'Sobre', end: false },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setIsOpen(false) }, [pathname])
  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => { if (event.key === 'Escape') setIsOpen(false) }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [])

  return <header className="site-header">
    <div className="header-inner container">
      <Link to="/" className="logo" aria-label="Alan Magalhães, início"><span className="logo-mark">AM<span>.</span></span><span className="logo-name">ALAN<br/>MAGALHÃES</span></Link>
      <nav className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
        {links.map(link => <NavLink key={link.to} end={link.end} to={link.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{link.text}</NavLink>)}
        <a className="nav-link mobile-contact" href="mailto:alanmr565@gmail.com">Contato</a>
      </nav>
      <a href="mailto:alanmr565@gmail.com" className="header-cta">Vamos conversar <ArrowUpRight size={16}/></a>
      <button type="button" className="menu-button" aria-expanded={isOpen} aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setIsOpen(v => !v)}>{isOpen ? <X size={23}/> : <Menu size={23}/>}</button>
    </div>
  </header>
}
