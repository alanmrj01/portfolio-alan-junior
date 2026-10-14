import { ArrowUpRight, Braces, ChartNoAxesCombined, Workflow } from 'lucide-react'
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
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi'
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
  { label: 'Python', icon: <SiPython />, color: '#3776ab' },
  { label: 'Power BI', image: '/images/brands/power-bi.svg' },
  { label: 'Power Automate', image: '/images/brands/power-automate.svg' },
  { label: 'Microsoft Excel', icon: <PiMicrosoftExcelLogoFill />, color: '#217346' },
  { label: 'Microsoft SharePoint', logo: 'sharepoint' },
  { label: 'React', icon: <SiReact />, color: '#61dafb' },
  { label: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
  { label: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
  { label: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
  { label: 'Playwright', image: '/images/brands/playwright.svg' },
  { label: 'GitHub', icon: <SiGithub />, color: '#f5f5f2' },
  { label: 'Google Cloud', icon: <SiGooglecloud />, color: '#4285f4' },
  { label: 'WhatsApp Cloud API', icon: <SiWhatsapp />, color: '#25d366' },
  { label: 'Fracttal One', image: '/images/brands/fracttal.webp' },
]

const ecosystem = [
  'Microsoft Power Platform',
  'SAP',
  'Fracttal One',
  'Meta / WhatsApp Cloud API',
  'Google Cloud',
  'Render',
  'Netlify',
  'Brevo',
  'Resend',
  'Backblaze B2',
  'GitHub',
]

function SharePointLogo() {
  return (
    <svg viewBox="0 0 64 64" role="presentation">
      <circle cx="38" cy="20" r="15" fill="#038387" />
      <circle cx="45" cy="42" r="14" fill="#37c6d0" />
      <circle cx="24" cy="42" r="17" fill="#1a9ba1" />
      <rect x="7" y="16" width="30" height="34" rx="4" fill="#036c70" />
      <path d="M16 27c0-4 3.5-6 8.5-6 3 0 5.8.8 7.8 2.2l-2.5 4.4a9 9 0 0 0-5.3-1.8c-1.7 0-2.7.5-2.7 1.5 0 3.2 11.5 1.7 11.5 9.8 0 4.4-3.7 7-9.3 7-3.6 0-7-1-9.4-2.8l2.7-4.5a11 11 0 0 0 6.8 2.4c2 0 3.2-.6 3.2-1.7C27.3 34 16 35.6 16 27Z" fill="#fff" />
    </svg>
  )
}

const services = [
  {
    icon: <ChartNoAxesCombined />,
    title: 'Business Intelligence & Analytics',
    description: 'Dashboards, integração e modelagem de dados para análises operacionais e gerenciais.',
    tags: ['POWER BI', 'MODELAGEM', 'INDICADORES'],
    category: 'Business Intelligence',
    image: '/images/projects/bi-manutencao-industrial/galeria-02.webp',
    imageAlt: 'Dashboard de manutenção industrial com indicadores e gráficos',
  },
  {
    icon: <Workflow />,
    title: 'Automação & Inteligência Artificial',
    description: 'Fluxos automatizados, regras determinísticas e IA aplicada à execução de processos.',
    tags: ['POWER AUTOMATE', 'PYTHON', 'IA APLICADA'],
    category: 'Automação',
    image: '/images/projects/fichas-manobra/galeria-01.webp',
    imageAlt: 'Fluxo automatizado de fichas de manobra no Power Automate',
  },
  {
    icon: <Braces />,
    title: 'Sistemas & Integrações',
    description: 'Aplicações empresariais e APIs que conectam ferramentas, dados e operações.',
    tags: ['REACT', 'FASTAPI', 'APIS'],
    category: 'Sistemas & IA',
    image: '/images/projects/erp-central-monitoramento/galeria-01.webp',
    imageAlt: 'Tela principal do ERP Central de Monitoramento',
  },
]

export default function Home() {
  return (
    <>
      <section id="inicio" className="home-hero" aria-labelledby="hero-title">
        <div className="container home-hero-inner">
          <div className="hero-identity page-enter">
            <span className="hero-monogram" aria-hidden="true">
              <img src="/images/alan/alan-magalhaes.webp" alt="" width="599" height="587" />
            </span>
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
          <p>Telas reais dos projetos apresentam as soluções em uso; cada estudo de caso detalha contexto, decisões e escopo.</p>
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
              <div className="stack-icon-card" key={stack.label} data-reveal="stack" aria-label={stack.label} title={stack.label}>
                <span className="stack-icon" aria-hidden="true" style={stack.color ? { color: stack.color } : undefined}>
                  {stack.image ? <img src={stack.image} alt="" width="64" height="64" loading="lazy" decoding="async" /> : stack.logo === 'sharepoint' ? <SharePointLogo /> : stack.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ecosystem-section" aria-labelledby="ecosystem-title">
        <div className="container ecosystem-heading">
          <span className="section-label" id="ecosystem-title">ECOSSISTEMA TECNOLÓGICO</span>
          <p>Tecnologias e serviços utilizados nos projetos — não representam clientes ou parceiros.</p>
        </div>
        <ul className="visually-hidden">{ecosystem.map((item) => <li key={item}>{item}</li>)}</ul>
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
            <figure className="about-portrait" data-reveal>
              <img src="/images/alan/alan-magalhaes.webp" alt="Alan Magalhães em um ambiente de tecnologia" width="599" height="587" loading="lazy" decoding="async" />
              <figcaption>Alan Magalhães<br /><strong>São Paulo · Brasil</strong></figcaption>
            </figure>
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
              <Link className="service-card" key={service.title} data-reveal="service" to={`/projetos?categoria=${encodeURIComponent(service.category)}`} aria-label={`Ver projetos de ${service.category}`}>
                <div className="service-card-top"><span>0{index + 1}</span>{service.icon}</div>
                <div className="service-card-media"><img src={service.image} alt={service.imageAlt} loading="lazy" decoding="async" /></div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
