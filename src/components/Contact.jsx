import React from 'react'
import { profile } from '../data/content.js'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container contact-inner">
        <span className="eyebrow">05 — Contact</span>
        <h2>Let's talk</h2>
        <p>
          I'm looking for {profile.status.toLowerCase()}. The fastest way to reach me
          is email.
        </p>
        <div className="contact-links">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
