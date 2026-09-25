export const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const ROLES = ['Frontend Developer', 'React Developer', 'Web Developer']

// Optional per-project links (each button only appears if you fill it in):
//   source: GitHub repo URL        -> shows "Source code"
//   demo:   Vercel / live site URL -> shows "Live demo"
//   video:  YouTube / Drive URL    -> shows "Demo video" (for projects with no live site)
export const PROJECTS = [
  {
    title: 'AI-Solutions Web Platform',
    role: 'Full-Stack Developer · Academic Project',
    date: 'June 2026',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    bullets: [
      'Architected a full-stack, database-driven website secured with PDO prepared statements and honeypot anti-spam protection.',
      'Designed an ARIA-accessible AI chatbot with intelligent escalation logic to route complex queries to human support.',
    ],
    source: 'https://github.com/aishmaskey23-ace/AI-Solutions',
    demo: 'https://ai-solutions-zeta.vercel.app/',
    image: '/projects/ai-solutions.png'
  },
  {
    title: 'JobTrack — Job Application Tracker',
    role: 'Frontend Developer · Self-Directed Project',
    date: 'September 2026',
    tags: ['React 19', 'Context API', 'React Router v7', 'localStorage'],
    bullets: [
      'Built a Kanban-style job tracker with custom hooks and dynamic detail pages.',
      'Optimized rendering with useMemo / React.memo / useCallback; added accessible drag-and-drop and ARIA-compliant UI.',
    ],
    source: 'https://github.com/aishmaskey23-ace/Job-Track-',
    demo: 'https://job-track-lake.vercel.app/',
    image: '/projects/jobtrack.png'
  },
    {
    title: 'Web Development Mini Projects',
    role: 'HTML5, CSS3, JavaScript (ES6+)',
    date: 'October 2025',
    tags: ['HTML5', 'CSS3', 'JavaScript(ES6+)'],
    bullets: [
      'Built interactive web apps — a personal finance & expense management dashboard, Tic Tac Toe and a To-Do List — each with a responsive, cross-device UI.',
    ],
    items: [
      { name: 'Expense Tracker', image: '/projects/expense-tracker.png', source: 'https://github.com/aishmaskey23-ace/Personal-Finance-and-Expense-Management-Dashboard', demo: 'https://personal-finance-and-expense-manage.vercel.app/' },
      { name: 'Tic Tac Toe', image: '/projects/tic-tac-toe.png', source: 'https://github.com/aishmaskey23-ace/Tic-Tac-Toe', demo: 'https://tic-tac-toe-ace-5ca6.vercel.app/' },
      { name: 'To-Do List', image: '/projects/todo-list.png',  source: 'https://github.com/aishmaskey23-ace/To-do-List-project', demo: 'https://to-do-list-project-lilac.vercel.app/' },
    ],
  },
  {
    title: 'Ace Beans Landing Page',
    role: 'Frontend Developer · Self-Directed Project',
    date: 'August 2026',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
     bullets: [
      'Built a responsive coffee-brand landing page in vanilla HTML/CSS/JS featuring dark mode, animated stats, a testimonial carousel, and a mobile-first layout.',
    ],
    source: 'https://github.com/aishmaskey23-ace/Ace-Beans',
    demo: 'https://ace-beans.vercel.app/',
    image: '/projects/ace-beans.png'
  },
  {
    title: 'FitLife',
    role: 'Android Developer · Academic Project',
    date: 'January 2026',
    tags: ['Kotlin', 'AndroidX', 'Kotlin DSL'],
    bullets: [
      'Engineered a native fitness app using Kotlin and AndroidX with Kotlin DSL builds and optimized JVM memory management.',
      'Managed automated dependency resolution and version control using professional Git workflows.',
    ],
    source: 'https://github.com/aishmaskey23-ace/FitLife_Aish23',
    video: 'https://drive.google.com/file/d/18BAKd12Qnp87IJd2hGQ1WlznHZT_eAP4/view?usp=drive_link',
    image: '/projects/fitlife.png',
    imageFit: 'contain',
  },

]

export const SKILL_GROUPS = [
  { key: 'technical', label: 'Technical Skills', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Hooks & State Management', 'MySQL', 'Figma'] },
  { key: 'versionControl', label: 'Version Control', items: ['Git', 'GitHub'] },
  { key: 'tools', label: 'Tools & Technologies', items: ['Visual Studio Code', 'Figma', 'Chrome DevTools', 'Android Studio'] },
  { key: 'softSkills', label: 'Soft Skills', items: ['Leadership & Team Coordination', 'Communication', 'Time Management', 'Problem-Solving'] },
]

export const SOCIAL_LINKS = [
  { key: 'github', label: 'GitHub', href: 'https://github.com/aishmaskey23-ace' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/aish-maskeyace23' },
  { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/ace.maskey' },
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/__.aceeee.__/' },
]
