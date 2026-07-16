import React from 'react'
import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner mono">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React + Vite</span>
      </div>
    </footer>
  )
}
