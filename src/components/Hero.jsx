import profileImg from '../assets/profile.jpg'
import { handleNavClick } from '../utils/nav.js'
import { useRoleCycle } from '../hooks/useRoleCycle.js'
import { ROLES } from '../data/content.js'

export default function Hero({ onNavigate }) {
  const role = useRoleCycle(ROLES)

  return (
    <section className="hero container" id="intro">
      <div>
        <div className="eyebrow-badge">
          <span className="dot"></span>
          Available for new opportunities
        </div>
        <h1>Namaste, I'm Aish Maskey.</h1>
        <p className="role-line">
          <span className="role-word" key={role}>{role}</span>
        </p>
        <p className="lead">
          Final-year Computer Systems Engineering student who builds responsive, accessible interfaces
          with React — from component architecture to the small interaction details.
        </p>
                <div className="hero-cta-row">
          <a className="btn primary" href="#projects" onClick={(e) => handleNavClick(e, 'projects', onNavigate)}>
            View projects
          </a>
          <a className="btn" href="/AISH_MASKEY_CV.pdf" download="AISH_MASKEY_CV.pdf">
            Download Resume
          </a>
          <a className="btn" href="#contact" onClick={(e) => handleNavClick(e, 'contact', onNavigate)}>
            Get in touch
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <img src={profileImg} alt="Portrait of Aish Maskey" />
      </div>
    </section>
  )
}
