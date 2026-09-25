import { SKILL_GROUPS } from '../data/content.js'
import { getTechIcon } from '../data/techIcons.js'
import TechLabel from './TechLabel.jsx'

export default function Skills() {
  return (
    <section className="panel container" id="skills">
      <div className="panel-head">
        <h2>Skills &amp; Technologies</h2>
      </div>
      <div className="skills-grid">
        {SKILL_GROUPS.map((g) => (
          <div className="skill-card" key={g.key}>
            <h4>{g.label}</h4>
            <div className="chip-row">
              {g.items.map((item) => (
                <span className={'chip' + (getTechIcon(item) ? ' has-icon' : '')} key={item}>
                  <TechLabel name={item} size={20} />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
