import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/travel-guides', label: 'Guides' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-snow/85 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Lighthouse Explorer home">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-snow font-display text-sm">L</span>
          <span className="font-display text-lg tracking-tight text-navy-950">
            Lighthouse <span className="text-gold-600">Explorer</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-0.5">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `px-3 py-2 text-sm rounded-md transition ${
                  isActive ? 'text-gold-700 bg-gold-500/10' : 'text-ink/75 hover:text-ink'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border text-ink"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (<><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>) : (<><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>)}
          </svg>
        </button>
      </div>

      <div id="mobile-nav" className={`md:hidden overflow-hidden transition-[max-height] duration-500 ${open ? 'max-h-[500px]' : 'max-h-0'}`}>
        <nav aria-label="Mobile" className="px-4 pb-4 pt-2 flex flex-col gap-1 bg-snow border-t border-border">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `px-3 py-2 rounded-md text-sm ${isActive ? 'text-gold-700 bg-gold-500/10' : 'text-ink/75'}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
