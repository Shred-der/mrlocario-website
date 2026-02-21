import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import FeaturedPrograms from './components/FeaturedPrograms'
import FreeResources from './components/FreeResources'
import LatestInsights from './components/LatestInsights'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import CanvasDots from './components/CanvasDots'
import useScrollReveal from './hooks/useScrollReveal'

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    // Initial check for theme preference
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        return true;
      }
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      // Update browser theme color for dark mode
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#050505');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      // Update browser theme color for light mode
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#FAFAFA');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Activate scroll reveal animations site-wide
  useScrollReveal()

  return (
    <div className="min-h-screen">
      <CanvasDots />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <HeroCarousel />
        <FeaturedPrograms />
        <FreeResources />
        <LatestInsights />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
