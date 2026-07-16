import React from 'react'
import { projects } from '../data/content.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="eyebrow">02 — Projects</span>
        <h2>Selected work</h2>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
