import Link from 'next/link'
import { useState } from 'react'
import LanguageSelector from '../layout/LanguageSelector'
import { useTranslation } from '@/hooks/useTranslation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const navItems = [
    { name: t('navigation.home'), path: '/' },
    { name: t('navigation.about'), path: '/about' },
    { name: t('navigation.events'), path: '/events' },
    { name: t('navigation.ministries'), path: '/ministries' },
    { name: t('navigation.programs'), path: '/programs' },
    { name: t('navigation.contact'), path: '/contact' },
  ]

  return (
    <header className="bg-church-black text-white py-4 border-b border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="text-church-orange-light">Church</span>
          <span className="text-white">Name</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path} 
                    className="text-gray-300 hover:text-church-orange-light transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSelector />
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
            </div>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path} 
                    className="block text-gray-300 hover:text-church-orange-light transition-colors font-medium py-2"
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