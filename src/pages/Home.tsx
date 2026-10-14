import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, ChartNoAxesCombined, Workflow, Blocks } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { primaryProjects } from '../data/projects'

const expertise = [
  { n: '01', icon: <BrainCircuit size={27} />, title: 'Inteligência artificial', desc: 'Regras determinísticas, análise contextual e IA aplicada a processos corporativos.' },
  { n: '02', icon: <ChartNoAxesCombined size={27} />, title: 'Business Intelligence', desc: 'Do dado bruto a indicadores que orientam a operação e a estratégia.' },
  { n: '03', icon: <Workflow size={27} />, title: 'Automações & integrações', desc: 'Fluxos inteligentes entre sistemas, APIs e plataformas de terceiros.' },
  { n: '04', icon: <Blocks size={27} />, title: 'Sistemas & produtos', desc: 'Aplicações modulares para resolver problemas reais de negócio.' },
]

export default function Home() {
  return <>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-noise" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-top page-enter"><span className="eyebrow"><span className="live-dot"/> PORTFÓLIO / DADOS + ENGENHARIA</span><span className="hero-coordinates">SÃO PAULO, BRASIL · PT/BR</span></div>
        <div className="hero-copy">
          <p className="hero-intro page-enter">OLÁ, EU SOU ALAN MAGALHÃES.</p>
          <h1 id="hero-title" className="hero-title"><span className="page-enter">TRANSFORMO</span><span className="page-enter">PROBLEMAS EM</span><span className="accent-line page-enter">SOLUÇÕES<span className="star">✳</span></span><span className="page-enter">INTELIGENTES.</span></h1>
        </div>
        <div className="hero-bottom page-enter"><p>BI, inteligência artificial, automação e sistemas para criar processos mais eficientes e decisões mais bem informadas.</p><a href="#destaques" className="circle-arrow" aria-label="Ver projetos em destaque"><ArrowDown size={28}/></a></div>
      </div>
      <div className="hero-bottom-rule container"/>
    </section>

    <section className="intro-section section-space"><div className="container intro-grid">
      <div className="section-index" data-reveal><span className="index-number">[ 01 / VISÃO ]</span><span className="index-line"/></div>
      <div data-reveal><p className="intro-big">TECNOLOGIA É MAIS DO QUE CÓDIGO. É <em>RESOLVER O QUE IMPORTA.</em></p><div className="intro-bottom"><p>Atuação no encontro entre dados, operações e desenvolvimento de soluções. Projetos que conectam análise, automação e engenharia de software para transformar a rotina das empresas.</p><Link to="/sobre" className="text-link">Mais sobre minha atuação <ArrowUpRight size={18}/></Link></div></div>
    </div></section>

    <section id="destaques" className="work-section section-space"><div className="container">
      <div className="section-top" data-reveal><div><span className="section-index">[ 02 / PROJETOS ]</span><h2 className="section-heading">TRABALHOS<br/><em>EM DESTAQUE.</em></h2></div><p className="section-aside">Soluções desenvolvidas para desafios reais — da análise de dados à automação inteligente.</p></div>
      <div className="projects-grid">{primaryProjects.slice(0, 6).map(project => <ProjectCard key={project.id} project={project}/>)}</div>
      <div className="projects-footer" data-reveal><p>Conheça também os projetos de análise comercial, gestão contratual, facilities e automações recorrentes.</p><Link className="button button-light" to="/projetos">Explorar todos os projetos <ArrowUpRight size={20}/></Link></div>
    </div></section>

    <section className="what-section section-space"><div className="container">
      <div className="section-top" data-reveal><div><span className="section-index">[ 03 / ESPECIALIDADES ]</span><h2 className="section-heading">ONDE DADOS<br/><em>ENCONTRAM AÇÃO.</em></h2></div><p className="section-aside">Um repertório técnico que vai da descoberta do problema à implementação.</p></div>
      <div className="expertise-grid">{expertise.map(item => <div className="expertise-card" data-reveal key={item.n}><div className="expertise-top"><span>{item.n} / 04</span>{item.icon}</div><h3>{item.title}</h3><p>{item.desc}</p><ArrowRight className="expertise-arrow" size={22}/></div>)}</div>
    </div></section>

    <section className="stack-section section-space"><div className="container stack-grid">
      <div data-reveal><span className="section-index">[ 04 / FERRAMENTAS ]</span><h2 className="section-heading">FERRAMENTAS<br/><em>QUE CONECTAM.</em></h2><p>As tecnologias mudam de projeto para projeto. A prioridade é escolher o que realmente resolve a necessidade.</p></div>
      <div className="stack-list" data-reveal>{[
        ['DADOS & BI', 'Power BI · Excel · SharePoint · Modelagem de Dados'],
        ['SISTEMAS', 'Python · React · TypeScript · FastAPI · Flet'],
        ['AUTOMAÇÃO', 'Power Automate · Playwright · Microsoft Forms'],
        ['INTEGRAÇÕES', 'Fracttal One API · Meta / WhatsApp Cloud API'],
        ['INFRAESTRUTURA', 'Google Cloud Run · Netlify · Backblaze B2'],
        ['INTELIGÊNCIA', 'Algoritmos determinísticos · IA aplicada · Regras auditáveis'],
      ].map(([label, tools]) => <div className="stack-row" key={label}><span>{label}</span><p>{tools}</p><ArrowUpRight size={17}/></div>)}</div>
    </div></section>
  </>
}
