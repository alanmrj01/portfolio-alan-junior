import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollEffects from './components/ScrollEffects'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  return <>
    <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
    <div className="route-curtain" aria-hidden="true"><span>AM.</span></div>
    <ScrollEffects />
    <Header />
    <main id="main-content">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projetos" element={<Projects/>} />
        <Route path="/projetos/:id" element={<ProjectDetail/>} />
        <Route path="/sobre" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </main>
    <Footer />
  </>
}
