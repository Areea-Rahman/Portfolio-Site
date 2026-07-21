// ---------------------------------------------------------------------------
// EDIT ME: this file holds all the text content for the site.
// Fill in your real details — components just render whatever is here.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Areea Rahman',
  photo:'/headshot.JPG',
  role: 'Data Scientist',
  focus: 'GenAI · Financial Analytics · Dashboards',
  status: 'Open to new grad roles',
  location: 'Allentown, PA',
  email: 'areearahman@gmail.com',
  github: 'https://github.com/Areea-Rahman',
  // TODO: add your actual LinkedIn URL if not already updated locally
  linkedin: 'https://www.linkedin.com/in/areea-rahman-064574232/',
  resumeUrl: '/resume.pdf', // place resume.pdf inside the public/ folder
  summary:
    "Welcome to my portfolio! I recently graduated magna cum laude from the Schreyer Honors College at Penn State University with degrees in Data Science & Economics. I've built GenAI chatbots at PwC and PPL, led financial strategy for an $18.8M fundraising organization (Penn State THON), and I'm looking for a full-time data science or analytics role where I can use my technical skills to make a real impact.",
}

// method: short tag shown on the card (NLP / Dashboard / Research / Product)
export const projects = [
  {
    id: 'capstone-chatbot',
    title: 'Lost & Found AI Chatbot for Public Transit',
    method: 'NLP · Product',
    summary:
      'Built with a team of 3 to address a real gap in public transit: over 400,000 items are lost annually and 43% are never claimed, largely due to vague descriptions and slow manual matching by staff.',
    approach:
      'Designed an intelligent matching system using NLP embeddings, a vector database, and computer vision so riders can report lost items and staff can log found items with automatic, description-based matching instead of manual comparison.',
    result:
      'Tested across 5 item categories (~20 items each, 100 total) and achieved an 85% matching accuracy rate.',
    links: {
      code: 'https://github.com/Areea-Rahman/Lost-and-Found/tree/main', // TODO: update with actual repo name
      demo: 'https://ai-powered-lost-and-found-system-with-vision-language-matching.streamlit.app/', // TODO: add a live Streamlit/Gradio demo link once deployed
    },
  },
      {
    id: 'pwc-rcsa-chatbot',
    title: 'RCSA Chatbot & Power BI Dashboard',
    method: 'NLP · Dashboard · Hackathon',
    summary:
      'Developed in a team of six for a company-wide PwC hackathon: a Python-based chatbot designed to automate the Risk and Controls Self-Assessment (RCSA) process, integrated with a Power BI dashboard for real-time visualization. Awarded 1st place out of 15 competing teams.',
    approach:
      'The chatbot guided users through each step of the RCSA framework. By ingesting user inputs regarding business operations and current mitigation techniques, the bot calculated quantitative risk ratings and evaluated control effectiveness. This assessment data was streamed directly into a Power BI dashboard, providing stakeholders with an interactive, high-level view of risk exposure and control performance across every phase of the business.',
    result:
      'In addition to securing the first-place win, our team was invited to present the live demo to active PwC clients as an innovative solution to modernize their internal risk management processes.',
    links: {
      code: '',
      demo: '',
    },
  },
    {
    id: 'thon-donor-analytics',
    title: 'THON Donor Analytics & Dashboard',
    method: 'Dashboard · Analytics',
    summary:
      'As the Finance Director for Penn State THON, I analyzed donor data to improve engagement and retention across 150,000+ annual donations.',
    approach:
      'Investigated historical donor trends and built forecasting models to project future giving. Consolidated large-scale donor datasets in Excel and built Tableau dashboards to track fundraising progress in real time.',
    result:
      'Dashboards informed data-backed campaign planning for an organization that raised $18.8M in a single year.',
    media: {
      // TODO: convert your .mov to .mp4 (recommended for cross-browser playback),
      // add it to public/, and update this filename to match
      type: 'video',
      src: '/thon-dashboard-demo.mp4',
      alt: 'THON donor analytics Tableau dashboard demo',
    },
    links: {
      code: '',
      demo: '',
    },
  },
    {
     id: 'ppl-chatbot',
    title: 'Einstein Agent Assist Tool — GenAI Customer Service Chatbot',
    method: 'NLP · Internship',
    summary:
      "Built an internal generative AI chatbot for PPL Corporation's customer service team, aimed at streamlining the call process to reduce operational expense and burden on agents.",
    approach:
      'Owned prompt engineering to reduce hallucinations and keep answers grounded in the underlying knowledge base, implemented chat history via object-oriented programming for conversational memory across a session, and designed a real-person escalation path so agents get clear next steps whenever the bot has no confident answer.',
    result: 'Potential to decrease average call handle time by 20%.',
    links: {
      code: '',
      demo: '',
    },
  },
  {
    id: 'thesis',
    title: 'Regulatory Impact on Uber Drivers (Honors Thesis)',
    method: 'Research',
    summary:
      'Authored a 40-page honors thesis analyzing how Colorado ride-share regulations affected Uber driver compensation and tipping behavior.',
    approach:
      'Used Difference-in-Differences (DiD) regression models in Python to isolate the causal effect of the regulatory change from other market trends.',
    result:
      "Found no significant change in tip magnitude or driver effort, but a statistically significant increase in zero-dollar tips post-regulation — evidence of a gap in accountability and auditing for algorithmic management in the gig economy.",
    links: {
      code: '',
      demo: '/thesis.pdf', // TODO: link to hosted PDF
      demoLabel: 'Read full thesis here',
    },
  },

]

export const skills = {
  Languages: ['Python', 'SQL', 'R'],
  'Tools / Platforms': ['Tableau', 'Power BI', 'Alteryx', 'Excel'],
  Libraries: ['pandas', 'scikit-learn', 'statsmodels'],
}

export const experience = [
  {
    role: 'Financial Services Data & Tech Intern',
    org: 'PwC',
    dates: 'Jun 2025 – Aug 2025',
    bullets: [
      'Conducted client data reconnaissance on financial transaction datasets, performing reconciliation projects to validate data accuracy and identify key transaction patterns for improved quality control.',
      'Won 1st place out of 15 teams in a company hackathon by developing a Python-based chatbot for the Risk and Controls Self-Assessment process and a Power BI dashboard to visualize results.',
    ],
  },
  {
    role: 'Data Science and Machine Learning Intern',
    org: 'PPL Corporation',
    dates: 'May 2024 – Aug 2024',
    bullets: [
      'Developed an internal generative AI chatbot for the customer service knowledge database using LLMs and retrieval-augmented generation, decreasing average call handle time by 20%.',
      'Specialized in prompt engineering and chat history implementation through object-oriented programming to provide accurate answers and conversational memory.',
      'Performed exploratory data analysis on local avian patterns and utility outage data to increase grid reliability.',
    ],
  },
  {
    role: 'Finance Director',
    org: 'Penn State THON',
    dates: 'Apr 2025 – Apr 2026',
    bullets: [
      'Directed financial strategy and operations for $18.8M in fundraising and a $750,000 budget, directly managing a team of 24 finance captains to ensure the financial integrity of 150,000+ annual donations',
      'Consolidated and analyzed large-scale donor datasets in Excel to identify giving trends, forecast and track revenue streams, and inform data-backed fundraising campaign planning',
    ],
          press: {
    label: 'Featured in Fox8 TV', 
    url: 'https://www.fox8tv.com/newspost/funding-cancer-research/', 
  },
  },
  {
    role: 'Data Analytics Coordinator',
    org: 'Penn State THON',
    dates: 'Apr 2024 – Apr 2025',
    bullets: [
      'Analyzed donor-related data to increase engagement and retention, forecasting future trends from historical data.',
      'Built Tableau dashboards to track fundraising progress and visualize donation information for leadership.',
    ],
  },
]
