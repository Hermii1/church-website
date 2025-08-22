// src/components/LanguageSelector.tsx
'use client'

import { useState } from 'react'

export default function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState('en')
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'am', name: 'አማርኛ' },
    { code: 'ti', name: 'ትግሪኛ' },
    { code: 'om', name: 'Afan Oromo' }
  ]

  return (
    <div className="relative">
      <select 
        value={currentLanguage}
        onChange={(e) => setCurrentLanguage(e.target.value)}
        className="bg-primary-800 text-white border border-primary-700 rounded-md py-1 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-secondary-500"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>{lang.name}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}