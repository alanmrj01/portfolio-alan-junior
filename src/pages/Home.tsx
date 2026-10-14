import { ArrowUpRight, Blocks, Braces, ChartNoAxesCombined, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  SiFastapi,
  SiGithub,
  SiGooglecloud,
  SiJavascript,
  SiPython,
  SiReact,
  SiTypescript,
  SiWhatsapp,
} from 'react-icons/si'
import FeaturedCarousel from '../components/FeaturedCarousel'
import { projects } from '../data/projects'

const featuredIds = [
  'erp-central-monitoramento',
  'ia-conversao-solicitacoes',
  'bi-manutencao-industrial',
  'alovia',
  'detailer-business',
  'contas-a-pagar',
]

const featuredProjects = featuredIds.map((id) => projects.find((project) => project.id === id)!).filter(Boolean)

const stacks = [
  { label: 'Python', icon: <SiPython /> },
  { label: 'Power BI', mark: 'PBI' },
  { label: 'Power Automate', mark: 'PA' },
  { label: 'Excel', mark: 'XL' },
  { label: 'SharePoint', mark: 'SP' },
  { label: 'React', icon: <SiReact /> },
  { label: 'TypeScript', icon: <SiTypescript /> },
  { label: 'JavaScript', icon: <SiJavascript /> },
  { label: 'FastAPI', icon: <SiFastapi /> },
  { label: 'Playwright', mark: 'PW' },
  { label: 'GitHub', icon: <SiGithub /> },
  { label: 'Google Cloud', icon: <SiGooglecloud /> },
  { label: 'WhatsApp Cloud API', icon: <SiWhatsapp /> },
  { label: 'Fracttal One', mark: 'F1' },
]

const ecosystem = ['Microsoft Power Platform', 'Fracttal One', 'Meta / WhatsApp', 'Google Cloud', 'Netlify', 'Backblaze B2']

const services = [
  {
    icon: <ChartNoAxesCombined />,
    title: 'Business Intelligence & Analytics',
    description: 'Dashboards, integração e modelagem de dados para análises operacionais e gerenciais.',
    tags: ['POWER BI', 'MODELAGEM', 'INDICADORES'],
  },
  {
    icon: <Workflow />,
    title: 'Automação & Inteligência Artificial',
    description: 'Fluxos automatizados, regras determinísticas e IA aplicada à execução de processos.',
    tags: ['POWER AUTOMATE', 'PYTHON', 'IA APLICADA'],
  },
  {
    icon: <Braces />,
    title: 'Sistemas & Integrações',
    description: 'Aplicações empresariais e APIs que conectam ferramentas, dados e operações.',
    tags: ['REACT', 'FASTAPI', 'APIS'],
  },
]

export default function Home() {
  return (
    <>
      <section id="inicio" className="home-hero" aria-labelledby="hero-title">
        <div className="container home-hero-inner">
          <div className="hero-identity page-enter">
            <span className="hero-monogram" aria-hidden="true">AM</span>
            <p>OLÁ, SOU<br /><strong>ALAN MAGALHÃES</strong></p>
          </div>
          <div className="hero-statement">
            <p className="hero-kicker page-enter">DADOS · IA · AUTOMAÇÃO</p>
            <h1 id="hero-title" className="home-hero-title">
              <span className="page-enter">Especialista em Dados,</span>
              <span className="page-enter">IA <em>&</em> Automação</span>
            </h1>
            <a className="hero-button page-enter" href="#latest-works">Conheça minhas soluções <ArrowUpRight size={19} /></a>
          </div>
          <div className="hero-meta page-enter">
            <span>PORTFÓLIO PROFISSIONAL</span>
            <span>SÃO PAULO · BRASIL</span>
          </div>
        </div>
      </section>

      <section id="latest-works" className="latest-works-section">
        <div className="container works-heading" data-reveal>
          <span className="section-label">PROJETOS EM DESTAQUE</span>
          <h2>Latest Works</h2>
          <p>Fotografias contextuais apresentam o setor de cada solução; os detalhes técnicos estão nos estudos de caso.</p>
        </div>
        <FeaturedCarousel projects={featuredProjects} />
      </section>

      <section id="stacks" className="stacks-section section-pad">
        <div className="container">
          <div className="centered-heading" data-reveal>
            <span className="section-label">STACKS & TOOLS</span>
            <h2>Ferramentas ligadas aos projetos.</h2>
          </div>
          <div className="stack-icon-grid">
            {stacks.map((stack) => (
              <div className="stack-icon-card" key={stack.label} data-reveal="stack">
                <span className="stack-icon" aria-hidden="true">{stack.icon ?? stack.mark}</span>
                <span>{stack.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ecosystem-section" aria-labelledby="ecosystem-title">
        <div className="container ecosystem-heading">
          <span className="section-label" id="ecosystem-title">ECOSSISTEMA TECNOLÓGICO</span>
          <p>Plataformas e serviços integrados aos projetos.</p>
        </div>
        <div className="ecosystem-track" aria-hidden="true">
          {[...ecosystem, ...ecosystem].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✳</i></span>)}
        </div>
      </section>

      <section id="sobre" className="about-home section-pad">
        <div className="container">
          <div className="centered-heading about-heading" data-reveal>
            <span className="section-label">SOBRE</span>
            <h2>Processo, lógica e execução.</h2>
          </div>
          <div className="about-home-grid">
            <div className="about-data-visual" data-reveal aria-label="Composição visual abstrata sobre dados e tecnologia">
              <span className="data-visual-index">AM / 01</span>
              <div className="data-orbit"><span>Dados</span><i /><i /><i /></div>
              <div className="data-bars"><span /><span /><span /><span /><span /></div>
              <p>ENTENDER<br />CONECTAR<br />CONSTRUIR</p>
            </div>
            <div className="about-home-copy" data-reveal>
              <p className="about-lead">Transformo problemas operacionais em soluções digitais que aproximam informação, regras e ação.</p>
              <p>Meu trabalho conecta Business Intelligence, automação e desenvolvimento de sistemas. Cada projeto começa pela leitura do processo real: suas exceções, dependências e decisões críticas.</p>
              <p>O resultado pode ser um painel, um fluxo automatizado, uma API ou uma aplicação completa — sempre com clareza técnica e uso responsável dos dados.</p>
              <Link className="editorial-link" to="/sobre">Conheça minha atuação <ArrowUpRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="services-section section-pad">
        <div className="container">
          <div className="services-intro" data-reveal>
            <span className="section-label">SERVIÇOS</span>
            <h2>Soluções digitais a partir de desafios reais.</h2>
            <p>Três frentes complementares para estruturar decisões, automatizar rotinas e conectar operações.</p>
          </div>
          <div className="service-card-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title} data-reveal="service">
                <div className="service-card-top"><span>0{index + 1}</span>{service.icon}</div>
                <Blocks className="service-watermark" aria-hidden="true" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
