import React from 'react'
import { skills } from '../data/content.js'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="eyebrow">03 — Skills</span>
        <h2>Toolkit</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skills-col">
              <h4 className="mono">{category}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
