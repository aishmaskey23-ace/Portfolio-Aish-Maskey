import { useCallback } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { NAV_ITEMS } from './data/content.js'
import { useScrollSpy } from './hooks/useScrollSpy.js'
import { useTheme } from './hooks/useTheme.js'
import { useScrollReveal } from './hooks/useScrollReveal.js'
import { scrollToId } from './utils/nav.js'

const IDS = ['intro', ...NAV_ITEMS.map((n) => n.id)]

export default function App() {
  const active = useScrollSpy(IDS)
  const onNavigate = useCallback((id) => scrollToId(id), [])
  const [theme, toggleTheme] = useTheme()
  useScrollReveal()

  return (
    <>
      <Navbar active={active} onNavigate={onNavigate} theme={theme} onToggleTheme={toggleTheme} />
      <Hero onNavigate={onNavigate} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer onNavigate={onNavigate} />
    </>
  )
}
