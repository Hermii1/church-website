// src/components/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import LanguageSelector from './LanguageSelector'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Church of Shiloh Logo" className="h-12 mr-3" />
            <h1 className="text-xl font-bold">Church of Shiloh</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <Link href="/" className="hover:text-secondary-400 transition">Home</Link>
              <Link href="/about" className="hover:text-secondary-400 transition">About Us</Link>
              <Link href="/services" className="hover:text-secondary-400 transition">Services</Link>
              <Link href="/ministries" className="hover:text-secondary-400 transition">Ministries</Link>
              <Link href="/events" className="hover:text-secondary-400 transition">Events</Link>
              <Link href="/contact" className="hover:text-secondary-400 transition">Contact</Link>
            </nav>
            <LanguageSelector />
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-secondary-400 transition">Home</Link>
              <Link href="/about" className="hover:text-secondary-400 transition">About Us</Link>
              <Link href="/beliefs" className="hover:text-secondary-400 transition">Beliefs</Link>
              <Link href="/leadership" className="hover:text-secondary-400 transition">Leadership</Link>
              <Link href="/services" className="hover:text-secondary-400 transition">Services</Link>
              <Link href="/ministries" className="hover:text-secondary-400 transition">Ministries</Link>
              <Link href="/events" className="hover:text-secondary-400 transition">Events</Link>
              <Link href="/contact" className="hover:text-secondary-400 transition">Contact</Link>
            </nav>
            <div className="mt-4">
              <LanguageSelector />
            </div>
          </div>
        )}
      </div>
      </header>
  )
}