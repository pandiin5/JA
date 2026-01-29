import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

/**
 * Main App Component
 * 
 * Serves as the root component for the portfolio website.
 * Manages overall layout, theme state, and component composition.
 * Implements a component-based architecture with smooth animations
 * and responsive design across all screen sizes.
 */
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Prevent scroll during initial load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={`${isDarkMode ? 'dark' : 'light'} min-h-screen`}>
      {/* Animated background */}
      <AnimatedBackground />

      {/* Main content wrapper */}
      <div className="relative z-10">
        {/* Navigation bar with theme toggle */}
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        {/* Portfolio sections */}
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default App
