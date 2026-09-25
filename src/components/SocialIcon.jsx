// Original brand colors for each icon.
// GitHub uses the page text color so it stays visible in both dark and light themes.
// Phone and location use the muted text color to match the rest of the contact labels.
const BRAND_FILL = {
  github: 'var(--text)',
  linkedin: '#0A66C2',
  facebook: '#1877F2',
  instagram: 'url(#instagram-gradient)',
  mail: '#EA4335',
  phone: 'var(--text-mute)',
  location: 'var(--text-mute)',
}

export default function SocialIcon({ name }) {
  const common = {
    viewBox: '0 0 24 24',
    'aria-hidden': 'true',
    style: { fill: BRAND_FILL[name] },
  }

  switch (name) {
    case 'github':
      return (
        <svg {...common}>
          <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.32 9.32 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.58.69.48A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...common}>
          <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.94 1.94 0 1 0 0 3.88 1.94 1.94 0 0 0 0-3.88ZM20.44 20h-3.37v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20h-3.37V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.21-1.77 3.44 0 4.07 2.26 4.07 5.2V20Z" />
        </svg>
      )
    case 'facebook':
      return (
        <svg {...common}>
          <path d="M13.5 22v-8.2h2.75l.41-3.2h-3.16V8.4c0-.93.26-1.56 1.6-1.56h1.7V3.98A22.7 22.7 0 0 0 14.3 3.8c-2.46 0-4.14 1.5-4.14 4.26v2.54H7.4v3.2h2.76V22h3.34Z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg {...common}>
          <defs>
            <linearGradient id="instagram-gradient" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#FEDA75" />
              <stop offset="0.25" stopColor="#FA7E1E" />
              <stop offset="0.5" stopColor="#D62976" />
              <stop offset="0.75" stopColor="#962FBF" />
              <stop offset="1" stopColor="#4F5BD5" />
            </linearGradient>
          </defs>
          <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm4 3.4A3.6 3.6 0 1 1 8.4 12 3.6 3.6 0 0 1 12 8.4Zm0 2A1.6 1.6 0 1 0 13.6 12 1.6 1.6 0 0 0 12 10.4ZM16.9 6.6a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...common}>
          <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2 6.1 5.2a.75.75 0 0 0 .98 0L18.6 7H5.4Zm-.4 1.6V17h16V8.6l-6.9 5.87a2.25 2.25 0 0 1-2.9 0L5 8.6Z" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" />
        </svg>
      )
    case 'location':
      return (
        <svg {...common}>
          <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>
      )
    default:
      return null
  }
}