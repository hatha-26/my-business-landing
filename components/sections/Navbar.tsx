'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { HambergerMenu, CloseCircle, Login, UserAdd } from 'iconsax-react'
import { useState, useEffect } from 'react'
import { SITE, COLORS } from '@/lib/constants'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-gray-950/90 backdrop-blur-xl border-b border-gray-800/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="text-white font-bold text-lg">{SITE.name}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Features', href: '#features' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'About', href: '#about' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              <span className="flex items-center gap-2">
                <Login size={16} color="currentColor" />
                Sign In
              </span>
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="primary" size="sm">
              <span className="flex items-center gap-2">
                <UserAdd size={16} color="currentColor" />
                Get Started
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen
            ? <CloseCircle size={24} color="#ffffff" />
            : <HambergerMenu size={24} color="#ffffff" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-t border-gray-800/50 px-6 py-6 flex flex-col gap-4">
          {[
            { label: 'Features', href: '#features' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'About', href: '#about' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-gray-800">
            <Link href="/login">
              <Button variant="outline" size="md" className="w-full">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button variant="primary" size="md" className="w-full">Get Started Free</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}