import React from 'react'
import { profile } from '../data/content.js'

// Signature element: the intro is rendered as a styled pandas-style
// DataFrame output — a specific, on-brand alternative to a generic
// "Hi, I'm ___" hero.
const rows = [
  { field: 'name', value: profile.name },
  { field: 'role', value: profile.role },
  { field: 'focus', value: profile.focus },
  { field: 'status', value: profile.status },
  { field: 'location', value: profile.location },
]

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <div className="hero-name-row">
            {profile.photo && (
              <img className="hero-photo" src={profile.photo} alt={profile.name} />
            )}
            <h1>{profile.name}</h1>
          </div>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-cta">
            <a href="#projects" className="btn primary">
              View projects
            </a>
            <a href={profile.github} className="btn" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="dataframe" aria-label="Profile summary table">
          <div className="dataframe-header mono">
            <span>&gt;&gt;&gt; profile.head()</span>
          </div>
          <table className="mono">
            <thead>
              <tr>
                <th></th>
                <th>field</th>
                <th>value</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.field}>
                  <td className="idx">{i}</td>
                  <td className="field">{r.field}</td>
                  <td className="value">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="dataframe-footer mono">[5 rows x 2 columns]</div>
        </div>
      </div>
    </section>
  )
}
