import React from 'react'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <span className="eyebrow">04 — Experience</span>
        <h2>Where I've worked</h2>
        <div className="timeline">
          {experience.map((e) => (
            <div className="timeline-item" key={e.role + e.org}>
              <div className="timeline-meta mono">{e.dates}</div>
              <div>
                <h3>
                  {e.role} <span className="timeline-org">— {e.org}</span>
                </h3>
                <ul>
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {e.press && (
                  <a className="press-link" href={e.press.url} target="_blank" rel="noreferrer">
                  📰 {e.press.label} →
                  </a>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
