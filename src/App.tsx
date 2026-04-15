import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'
import ScrollProgress from './components/ScrollProgress'
import PageLoader from './components/PageLoader'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white/90 cursor-auto md:cursor-none noise-overlay">
      <PageLoader />
      <ScrollProgress />
      <ParticleBackground />
      <CustomCursor />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <div className="gradient-line" />
        <About />
        <div className="gradient-line" />
        <Projects />
        <div className="gradient-line" />
        <Skills />
        <div className="gradient-line" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
