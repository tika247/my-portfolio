const skills = [
  'React', 'Vue', 'TypeScript', 'Node', 'HTML5', 'CSS3',
  'PHP', 'Electron', 'MySQL', 'CMS', 'Git', 'RESTful API',
  'Design Tools', 'GitLab CI & CD', 'Linux', 'Three.js', 'Accessibility',
  'Regex', 'DevOps', 'Agile & Scrum development',
];

export function Skill() {
  return (
    <div className="skill">
      <h2 className="tab__hdg">SKILL</h2>
      <p className="tab__lead">My skill achieved through both client and private projects</p>

      <ul className="skill__list">
        {skills.map((name, i) => (
          <li key={name}>
            <span>{name}</span>
            <img
              src={`/assets/img/skill/img-${String(i + 1).padStart(2, '0')}.png`}
              alt=""
              width={80}
              height={80}
            />
          </li>
        ))}
      </ul>

      {/* <div className="skill__note">
        <ul className="skill__noteList">
          <li>As for HTML5, EJS is used as a HTML templating engine</li>
          <li>As for CSS3, SCSS is used as a superset of CSS</li>
          <li>As for Node.js, Express is used as a library</li>
          <li>My JS frameworks is the latest. E.g. as for Vue.js, Vue3 and Composition API</li>
          <li>
            As for CMS, I have experience of WordPress, WebRelease, Movable Type, and Adobe AEM
          </li>
        </ul>
      </div> */}
    </div>
  );
}
