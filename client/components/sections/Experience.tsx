import { portfolioData } from '../../data/portfolio';

export function Experience() {
  const mainEntries = Object.entries(portfolioData.experience.main);
  const otherEntries = Object.entries(portfolioData.experience.other);
  const mainLength = mainEntries.length;

  return (
    <div className="experience">
      <h2 className="tab__hdg">EXPERIENCE</h2>
      <p className="tab__lead">Career / Experience as Web Developer</p>

      <ul className="experience__list">
        {mainEntries.map(([name, entry], i) => (
          <li key={name} className="experience__item">
            <div className="experience__textArea">
              <h3 className="experience__name">{name}</h3>
              <span className="experience__time">{entry.time}</span>
              <p className="experience__text">{entry.text}</p>
            </div>
            <img
              src={`/assets/img/experience/icon-0${i + 1}.svg`}
              alt=""
              width={240}
              height={240}
              className="experience__img"
            />
          </li>
        ))}
      </ul>

      <p className="tab__lead">
        Experiences Outside Web Development That Shaped Who I Am
      </p>

      <ul className="experience__list">
        {otherEntries.map(([name, entry], i) => (
          <li key={name} className="experience__item">
            <div className="experience__textArea">
              <h3 className="experience__name">{name}</h3>
              <span className="experience__time">{entry.time}</span>
              <p className="experience__text">{entry.text}</p>
            </div>
            <img
              src={`/assets/img/experience/icon-0${mainLength + i + 1}.svg`}
              alt=""
              width={240}
              height={240}
              className="experience__img"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
