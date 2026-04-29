'use client'

import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { useState } from 'react'

const logo = 'https://lysejfhxackcmoksclvm.supabase.co/storage/v1/object/sign/web/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80YWMwNzIyNi04MjE4LTRmYjctODQ1Mi0xOTMwZTU2NjRhODkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvbG9nby5wbmciLCJpYXQiOjE3NzcwMjc1NDAsImV4cCI6MjA5MjM4NzU0MH0.YFd0pdxZDl2Iej_M1GwgLecd3NfhaG2oe40wgMk_cp0'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <span className="logo-text">Mi Servicio Técnico</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Inicio
          </Link>
          <Link href="/servicios" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Servicios
          </Link>
          <Link href="/contacto" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Contacto
          </Link>
          <Link href="/nosotros" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Nosotros
          </Link>
        </nav>

        <Link href="/contacto" className="cta-button">
          <Phone size={18} />
          <span>Solicitar Presupuesto</span>
        </Link>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
