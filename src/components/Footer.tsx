import { ArrowUpRight, MoveUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <footer id="contato" className="footer">
    <div className="container">
      <div className="footer-kicker"><span className="live-dot"/> DISPONÍVEL PARA CONVERSAR SOBRE NOVOS PROJETOS</div>
      <div className="footer-heading">TEM UM DESAFIO<br/><em>EM MENTE?</em></div>
      <a className="footer-email" href="mailto:alanmr565@gmail.com">Vamos conversar <MoveUpRight size={31}/></a>
      <div className="footer-bottom">
        <Link to="/" className="footer-signature">AM<span>.</span> <small>ALAN MAGALHÃES</small></Link>
        <div className="footer-links">
          <a href="mailto:alanmr565@gmail.com">E-mail <ArrowUpRight size={13}/></a>
          <a href="https://wa.me/5512988951423" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13}/></a>
          <a href="https://www.linkedin.com/in/alan-de-magalh%C3%A3es-614927260" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} ALAN MAGALHÃES</span>
      </div>
    </div>
  </footer>
}
