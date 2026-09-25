import { PROJECTS } from '../data/content.js'
import { getTechIcon } from '../data/techIcons.js'
import TechLabel from './TechLabel.jsx'

function ExternalLink({ href, children }) {
  return (
    <a className="project-link is-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

// Screenshot preview. Clicking it opens the live demo (or the demo video) when there is one.
// fit="contain" shows the whole image (good for phone screenshots); default crops to fill.
function Preview({ image, title, href, fit }) {
  const cls = 'project-media' + (fit === 'contain' ? ' contain' : '')
  const img = <img src={image} alt={`${title} preview`} loading="lazy" decoding="async" />
  return href ? (
    <a className={cls} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`}>
      {img}
    </a>
  ) : (
    <div className={cls}>{img}</div>
  )
}

const hasLink = (it) => it.source || it.demo || it.video
const isVisible = (it) => hasLink(it) || it.image

export default function Projects() {
  return (
    <section className="panel container" id="projects">
      <div className="panel-head">
        <h2>Projects</h2>
      </div>
      <div className="project-list">
        {PROJECTS.map((p) => (
          <div className={'project-card' + (p.image ? ' has-media' : '')} key={p.title}>
            {p.image && <Preview image={p.image} title={p.title} href={p.demo || p.video} fit={p.imageFit} />}

            <div className="project-body">
              <div className="project-top">
                <h3 className="project-title">{p.title}</h3>
                <span className="project-meta">{p.date}</span>
              </div>
              <div className="project-role">{p.role}</div>
              <ul>
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className={'tag-pill' + (getTechIcon(t) ? ' has-icon' : '')} key={t}>
                    <TechLabel name={t} size={14} />
                  </span>
                ))}
              </div>

              {p.items && p.items.some(isVisible) && (
                <div className={'project-items' + (p.items.some((it) => it.image) ? ' with-thumbs' : '')}>
                  {p.items.filter(isVisible).map((it) => (
                    <div className="project-item" key={it.name}>
                      {it.image && (
                        <Preview image={it.image} title={it.name} href={it.demo || it.video} fit={it.imageFit} />
                      )}
                      <div className="project-item-row">
                        <span className="project-item-name">{it.name}</span>
                        <div className="project-links">
                          {it.source && <ExternalLink href={it.source}>Source</ExternalLink>}
                          {it.demo && <ExternalLink href={it.demo}>Live demo</ExternalLink>}
                          {it.video && <ExternalLink href={it.video}>Demo video</ExternalLink>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {hasLink(p) && (
                <div className="project-links">
                  {p.source && <ExternalLink href={p.source}>Source code</ExternalLink>}
                  {p.demo && <ExternalLink href={p.demo}>Live demo</ExternalLink>}
                  {p.video && <ExternalLink href={p.video}>Demo video</ExternalLink>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}