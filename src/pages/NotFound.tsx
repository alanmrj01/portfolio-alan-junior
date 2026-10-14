import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return <section className="not-found container"><span>[ ERRO 404 ]</span><h1>ESTA PÁGINA<br/>NÃO EXISTE<span>.</span></h1><Link className="button button-light" to="/">Voltar ao início <ArrowUpRight size={19}/></Link></section>
}
