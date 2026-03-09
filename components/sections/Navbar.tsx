'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { HambergerMenu, Login, UserAdd } from 'iconsax-react'
import { useState } from 'react'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl">
          Soun
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-slate-400 hover:text-white transition-colors">
            Fitur
          </Link>
          <Link href="#pricing" className="text-slate-400 hover:text-white transition-colors">
            Harga
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="outline" size="sm">
              <span className="flex items-center gap-2">
                <Login size={16} color="currentColor" />
                Masuk
              </span>
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="primary" size="sm">
              <span className="flex items-center gap-2">
                <UserAdd size={16} color="currentColor" />
                Daftar Gratis
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HambergerMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 flex flex-col gap-4">
          <Link href="#features" className="text-slate-400 hover:text-white transition-colors">
            Fitur
          </Link>
          <Link href="#pricing" className="text-slate-400 hover:text-white transition-colors">
            Harga
          </Link>
          <Link href="/login">
            <Button variant="outline" size="sm">Masuk</Button>
          </Link>
          <Link href="/register">
            <Button variant="primary" size="sm">Daftar Gratis</Button>
          </Link>
        </div>
      )}
    </nav>
  )
}