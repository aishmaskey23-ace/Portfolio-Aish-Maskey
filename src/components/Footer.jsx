import { NAV_ITEMS, SOCIAL_LINKS } from '../data/content.js'
import { handleNavClick } from '../utils/nav.js'
import SocialIcon from './SocialIcon.jsx'

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-col footer-brand-col">
          <a href="#intro" className="footer-brand" onClick={(e) => handleNavClick(e, 'intro', onNavigate)}>
            Aish Maskey
          </a>
          <p className="footer-tagline">
            Frontend Developer building responsive, accessible interfaces with React.
          </p>
          <div className="footer-social">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.key}
                className="social-icon"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                <SocialIcon name={s.key} />
              </a>
            ))}
            <a
              className="social-icon"
              href="mailto:aishmaskey555@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <SocialIcon name="mail" />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <nav className="footer-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={'#' + item.id}
                className="footer-link"
                onClick={(e) => handleNavClick(e, item.id, onNavigate)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <nav className="footer-links">
            <a className="footer-link" href="mailto:aishmaskey555@gmail.com">
              aishmaskey555@gmail.com
            </a>
            <a className="footer-link" href="tel:+9779746553700">
              (+977) 9746553700
            </a>
            <span className="footer-link footer-link-static">Imadol, Lalitpur, Nepal</span>
          </nav>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© {year} Aish Maskey. All rights reserved.</span>
              <span>Believe in yourself, Keep grinding.</span>
      </div>
    </footer>
  )
}
