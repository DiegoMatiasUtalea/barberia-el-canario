import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#resenas', label: 'Reseñas' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#inicio" className={styles.brand} onClick={() => setMenuOpen(false)}>
        <span className={styles.brandIcon}>✂</span>
        <span className={styles.brandText}>El Canario</span>
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className={styles.link} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="tel:+34611156315" className={styles.cta} onClick={() => setMenuOpen(false)}>Reservar</a>
        </li>
      </ul>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Menú"
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
