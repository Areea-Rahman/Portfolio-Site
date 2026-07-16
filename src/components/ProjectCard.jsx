import React from 'react'

export default function ProjectCard({ project }) {
  const { title, method, summary, approach, result, links, media } = project

  return (
    <article className="project-card">
      <div className="project-card-top">
        <h3>{title}</h3>
        <span className="tag mono">{method}</span>
      </div>

      {media && media.type === 'video' && (
        <video
          className="project-media"
          src={media.src}
          autoPlay
          loop
          muted
          playsInline
          aria-label={media.alt || `${title} demo`}
        />
      )}
      {media && media.type !== 'video' && (
        <img
          className="project-media"
          src={media.src}
          alt={media.alt || `${title} demo`}
          loading="lazy"
        />
      )}

      <p className="project-summary">{summary}</p>

      <dl className="project-details">
        <div>
          <dt className="mono">approach</dt>
          <dd>{approach}</dd>
        </div>
        <div>
          <dt className="mono">result</dt>
          <dd className="result">{result}</dd>
        </div>
      </dl>

      <div className="project-links">
        {links.code && (
          <a href={links.code} target="_blank" rel="noreferrer">
            View code →
          </a>
        )}
      {links.demo && (
          <a href={links.demo} target="_blank" rel="noreferrer">
            {links.demoLabel || 'Live demo'} →
          </a>
        )}
      </div>
    </article>
  )
}

