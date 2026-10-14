import { ArrowUpRight } from 'lucide-react'

export default function About() {
  return <>
    <section className="page-hero container"><span className="eyebrow page-enter">[ SOBRE / ATUAÇÃO ]</span><h1 className="page-title page-enter">PENSAR.<br/>CONECTAR.<br/><em>TRANSFORMAR.</em></h1><div className="page-subline page-enter"><p>Alan de Magalhães Raimundo Junior</p><span>BI / AUTOMAÇÃO / SISTEMAS</span></div></section>
    <section className="about-body container section-space"><div data-reveal><span className="section-index">[ QUEM SOU ]</span><div className="about-avatar-placeholder"><span>AM.</span><small>RETRATO A DEFINIR</small></div></div>
      <div className="about-copy" data-reveal><h2>TRANSFORMO DESAFIOS OPERACIONAIS EM <em>SOLUÇÕES PRÁTICAS.</em></h2><p>Meu trabalho conecta análise de dados, automação e desenvolvimento de sistemas. Parto das necessidades reais dos processos para projetar aplicações, fluxos e indicadores que simplificam rotinas e aproximam informação de decisões.</p><p>Minha atuação reúne experiências em Business Intelligence, Power Platform, manutenção industrial, integração de APIs, inteligência artificial aplicada e desenvolvimento de soluções digitais.</p><p>Os cases apresentados aqui mostram diferentes caminhos para o mesmo objetivo: fazer a tecnologia entregar valor concreto aos processos.</p><a className="text-link" href="mailto:alanmr565@gmail.com">Entrar em contato <ArrowUpRight size={19}/></a></div>
    </section>
    <section className="about-principles section-space"><div className="container"><span className="section-index">[ PRINCÍPIOS ]</span><div className="principles-grid"><div data-reveal><span>01</span><h3>ENTENDER ANTES<br/>DE AUTOMATIZAR.</h3><p>Modelar o processo, mapear exceções e compreender o que precisa mudar.</p></div><div data-reveal><span>02</span><h3>PROJETAR PARA<br/>O USO REAL.</h3><p>Desenvolver experiências, relatórios e sistemas claros para quem vai utilizá-los.</p></div><div data-reveal><span>03</span><h3>DECIDIR COM<br/>EVIDÊNCIAS.</h3><p>Aplicar dados, regras explícitas e validações para apoiar decisões confiáveis.</p></div></div></div></section>
  </>
}
