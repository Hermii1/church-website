'use client'

import { useLanguage } from '@/Context/LanguageContext'
import { useState, useRef, useEffect } from 'react'

type LanguageCode = 'en' | 'am' | 'ti' | 'om';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'am', name: 'Amharic', native: 'አማርኛ' },
    { code: 'ti', name: 'Tigrinya', native: 'ትግሪኛ' },
    { code: 'om', name: 'Oromo', native: 'Afan Oromo' }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (code: LanguageCode) => {
    setLanguage(code);
    setIsOpen(false);
  }

  const currentLanguage = languages.find(lang => lang.code === language)

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-church-orange-light transition-colors border border-gray-600 hover:border-church-orange-light"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="hidden sm:inline">
          {currentLanguage?.native}
        </span>
        <span className="sm:hidden">
          {currentLanguage?.code.toUpperCase()}
        </span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code as LanguageCode)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  language === lang.code
                    ? 'bg-church-orange text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                role="menuitem"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{lang.native}</span>
                  <span className="text-xs opacity-70">{lang.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}