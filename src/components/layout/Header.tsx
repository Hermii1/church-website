import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import LanguageSelector from '../layout/LanguageSelector'
import { useTranslation } from '@/hooks/useTranslation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLight, setIsLight] = useState(false)
  const { t } = useTranslation()
  const router = useRouter()

  const navItems = [
    { name: t('navigation.home'), path: '/' },
    { name: t('navigation.about'), path: '/about' },
    { name: t('navigation.events'), path: '/events' },
    { name: t('navigation.ministries'), path: '/ministries' },
    { name: t('navigation.programs'), path: '/programs' },
    { name: t('navigation.contact'), path: '/contact' },
  ]

  // Theme toggle handler
  const handleThemeToggle = () => {
    setIsLight(prev => {
      const next = !prev;
      document.documentElement.setAttribute('data-theme', next ? 'light' : '');
      return next;
    });
  };

  return (
    <header className="bg-church-black text-white py-4 border-b border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="text-church-orange-light">Shiloh</span>
          <span className="text-white">Church</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="nav-container">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} style={{ display: 'inline-block' }}>
                  <Link 
                    href={item.path}
                    className={`nav-link${router.pathname === item.path ? ' active' : ''}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSelector />
          <div className="hidden md:block">
            {/* Theme Toggle Button */}
            <button className="theme-toggle" aria-label="Toggle theme" onClick={handleThemeToggle}>
              🌓
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-900 mt-2 py-4">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <LanguageSelector />
              {/* Theme Toggle Button for mobile */}
              <button className="theme-toggle" aria-label="Toggle theme" onClick={handleThemeToggle}>
                🌓
              </button>
            </div>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path}
                    className={`nav-link${router.pathname === item.path ? ' active' : ''} block py-2`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  )
}