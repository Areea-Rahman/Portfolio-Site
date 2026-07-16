import React from 'react'
import { profile } from '../data/content.js'

export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">01 — About</span>
          <h2>Background</h2>
        </div>
        <div>
          <p>
          {/*<p>{profile.summary}</p>*/}
            {/*  add 1-2 more paragraphs — your path into data science,
                what you're looking for in a role, and what you care about. */}
              I’ve always been drawn to math, statistics, and economics, but I wanted to do more than just write code. Applied Data Science became the perfect way to ground my quantitative background
               in real-world application. I am deeply interested in the ethical and equitable applications of data science, particularly within non-profit work and policy-making. 
               Whether analyzing the regulatory environment of the gig economy for my undergraduate honors thesis or managing fundraising operations, I strive to use my analytical skills to solve complex problems
              that directly benefit communities.  
              
              </p>
              <p>
                My academic journey culminated in being selected as the Data Sciences Student Marshal for outstanding academic and community contributions. Professionally, I built robust experience through internships 
              at PwC and PPL Corporation, specializing in machine learning, generative AI, and large-scale financial data reconciliation. Complementing this technical background is a proven commitment to leadership.
              As the Finance Director for Penn State THON, I managed the financial operations and strategy for an $18.8M total while leading a team of 24 captains. I also drove community engagement as the NeilStrong Chair 
              for my business fraternity by hosting semesterly blood drives. I also worked as the Director of Advertising for the Association of Women in Computing, and the Hospitality and Engagement Director for the Infusion Dance Competition.
              I am excited to bring this unique blend of analytical skills and mission-driven dedication to a collaborative data analyst or data science role. 

          </p>
        </div>
      </div>
    </section>
  )
}
