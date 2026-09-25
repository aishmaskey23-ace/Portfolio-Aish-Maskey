import { useState } from 'react'
import { NAV_ITEMS } from '../data/content.js'
import { handleNavClick } from '../utils/nav.js'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar({ active, onNavigate, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  function go(e, id) {
    handleNavClick(e, id, onNavigate)
    setOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#intro" className="brand" onClick={(e) => go(e, 'intro')}>
          Aish Maskey
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={'#' + item.id}
              className={'nav-link' + (active === item.id ? ' active' : '')}
              onClick={(e) => go(e, item.id)}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href="#contact" className="nav-cta" onClick={(e) => go(e, 'contact')}>
            Get in touch
          </a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} className="mobile-only-toggle" />
          <button
            className="nav-toggle"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <div className={'mobile-overlay' + (open ? ' open' : '')}>
        <nav className="mobile-links" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={'#' + item.id}
              className={'mobile-link' + (active === item.id ? ' active' : '')}
              onClick={(e) => go(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
