import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <section id="contato" className="contact-section">
        <div className="container contact-inner">
          <span className="section-label contact-label">CONTATO</span>
          <h2>Vamos transformar desafios em soluções.</h2>
          <p>Conte o contexto. A partir dele, estruturamos o próximo passo.</p>
          <a className="contact-button" href="mailto:alanmr565@gmail.com">Vamos conversar <ArrowUpRight size={22} /></a>
          <div className="contact-socials" aria-label="Canais de contato">
            <a href="mailto:alanmr565@gmail.com" aria-label="E-mail"><Mail /></a>
            <a href="https://wa.me/5512988951423" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a>
            <a href="https://www.linkedin.com/in/alan-de-magalh%C3%A3es-614927260" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://github.com/alanmrj01" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container site-footer-inner">
          <Link to="/" className="footer-signature"><span>AM.</span> Alan Magalhães</Link>
          <p>Projetado e desenvolvido para apresentar soluções autorais de Alan.</p>
          <span>© {new Date().getFullYear()} Alan Magalhães</span>
        </div>
      </footer>
    </>
  )
}
