import React from 'react'
import { profile } from '../data/content.js'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo mono">
          {profile.name.split(' ').map((w) => w[0]).join('')}
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href={profile.resumeUrl} className="btn" target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
