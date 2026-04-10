export function Profile() {
  return (
    <div className="profile">
      <h2 className="tab__hdg">PROFILE</h2>
      <p className="tab__lead">Brief introduction of me as a Web Developer</p>

      <div className="profile__wrap">
        <div className="profile__content">
          <div className="profile__textArea">
            <em className="profile__lead">Depth of Experience & Skills</em>
            <p className="profile__text">
              With over 5 years of professional experience and more than 100 clients served, I have delivered a wide range of products — including corporate websites, landing pages, SPAs, forms, CMS platforms, and desktop applications — across both frontend and backend disciplines.
            </p>
            <p className="profile__text">
              My technical expertise spans current mainstream technologies such as TypeScript, Next.js, and Nuxt.js, through to essential development tools including Git and CI/CD pipelines. This breadth allows me to approach each project with flexibility and precision — selecting the most suitable technology stack and methodology to handle complex requirements or shifting project scopes with confidence.
            </p>
            <ul className="profile__noteList">
              <li>For a full breakdown of my skills, please visit the Skills tab above.</li>
            </ul>
          </div>

          <div className="profile__textArea">
            <em className="profile__lead">Development Philosophy</em>
            <p className="profile__text">
              My development philosophy is simple: not just how it looks, but how it works beneath the surface.
            </p>
            <p className="profile__text">
              I place strong emphasis on the qualities that aren't immediately visible in a UI — accessibility, usability, performance, and code readability. These aspects are often underestimated, yet I believe they are among the most critical factors in building quality web applications. Since web apps are ultimately built for people, they should be usable by anyone, anywhere, at any time — and developers should pursue that standard relentlessly.
            </p>
            <p className="profile__text">
              To that end, I make active use of tools such as Lighthouse, Google DevTools, and linters — iterating extensively on Lighthouse scores in particular to drive meaningful, measurable improvements across every dimension of an application.
            </p>
          </div>

          <div className="profile__img">
            <img
              src={`${import.meta.env.BASE_URL}assets/img/profile/img-01.jpg`}
              alt=""
              width={384}
              height={288}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
