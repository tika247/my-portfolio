import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { useTab } from '../hooks/useTab';

const strengthKeys = Object.keys(portfolioData.strength);
const strengthEntries = Object.entries(portfolioData.strength);

export function Strength() {
  const { activeIndex, selectTab } = useTab(strengthKeys.length);

  return (
    <div className="strength">
      <h2 className="tab__hdg">MY STRENGTH</h2>
      <p className="tab__lead">
        My Six Core Strength Making Valuable Contribution and Inspiration
      </p>

      <div className="strength__content">
        <ul className="strength__list" role="tablist" aria-label="Strength categories">
          {strengthKeys.map((key, i) => (
            <li key={key}>
              <button
                type="button"
                role="tab"
                aria-selected={activeIndex === i}
                aria-controls={`strength-panel-${i}`}
                id={`strength-btn-${i}`}
                onClick={() => selectTab(i)}
              >
                {key.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>

        {strengthEntries.map(([key, entry], i) => (
          <div
            key={key}
            id={`strength-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`strength-btn-${i}`}
            className={`strength__detail${activeIndex === i ? ' is-show' : ''}`}
            hidden={activeIndex !== i}
          >
            <div className="strength__nameArea">
              <h3 className="strength__name">{key}</h3>
              <img
                src={`${import.meta.env.BASE_URL}assets/img/strength/icon-0${i + 1}.svg`}
                alt=""
                className="strength__img"
                width={160}
                height={160}
              />
            </div>

            <div className="strength__textArea">
              {entry.intro.map((text, j) => (
                <p key={j} className="strength__text">
                  {text}
                </p>
              ))}

              <dl className="strength__desc">
                {entry.points.map((point, j) => (
                  <React.Fragment key={j}>
                    <dt>{point.title}</dt>
                    <dd>{point.description}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
