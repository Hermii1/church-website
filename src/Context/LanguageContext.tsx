'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'am' | 'ti' | 'om'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [isLoaded, setIsLoaded] = useState(false)

  // Load saved language preference from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('church-language') as Language
    if (savedLanguage && ['en', 'am', 'ti', 'om'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
    setIsLoaded(true)
  }, [])

  // Save language preference to localStorage
  const updateLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('church-language', lang)
  }

  // Don't render children until language is loaded to avoid flash of default language
  if (!isLoaded) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}