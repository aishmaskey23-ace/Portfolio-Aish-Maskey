export default function About() {
  return (
    <section className="panel container" id="about">
      <div className="panel-head">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div>
          <p>
            I'm a final-year Frontend Developer with a strong foundation in HTML5, CSS3 and modern JavaScript (ES6+),
            building responsive, interactive interfaces with React hooks and component-driven design.
            I'm comfortable across the stack with MySQL for data, and I use Figma for wireframing and UI
            layout before writing a single line of code.
          </p>
          <p>
            I'm currently in my final year of a BSc (Hons) in Computer Systems Engineering at ISMT, in
            partnership with the University of Sunderland — splitting my time between coursework,
            personal projects, and freelance tutoring.
          </p>
          <div className="lang-row">
            {['English', 'Hindi', 'Nepali'].map((l) => (
              <span className="lang-chip" key={l}>
                {l}
              </span>
            ))}
          </div>
        </div>
        <div className="side-card">
          <h4>Interests</h4>
          <ul className="interest-list">
            <li>
              <span className="bullet" aria-hidden="true"></span>Exploring cutting-edge frontend design trends
            </li>
            <li>
              <span className="bullet" aria-hidden="true"></span>Focusing on UI and UX enhancements for better usability
            </li>
            <li>
              <span className="bullet" aria-hidden="true"></span>Architecting personal projects to solve real-world problems
            </li>
            <li>
              <span className="bullet" aria-hidden="true"></span>Staying at the forefront of modern web technologies
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
