import { useId } from 'react';
import { MainVisual } from './components/sections/MainVisual';
import { Profile } from './components/sections/Profile';
import { Skill } from './components/sections/Skill';
import { Experience } from './components/sections/Experience';
import { Works } from './components/sections/Works';
import { Strength } from './components/sections/Strength';
import { Footer } from './components/layout/Footer';
import { useTab } from './components/hooks/useTab'

const tabs = [
  { label: 'Works', Component: Works },
  { label: 'Profile', Component: Profile },
  { label: 'Skill', Component: Skill },
  { label: 'Experience', Component: Experience },
  { label: 'My Strength', Component: Strength }
];

export default function App() {
  const titleId = useId();
  const { activeIndex, selectTab, getBtnId, getPanelId } = useTab(tabs.length);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      selectTab((index + 1) % tabs.length);
    } else if (e.key === 'ArrowLeft') {
      selectTab((index - 1 + tabs.length) % tabs.length);
    }
  };

  return (
    <>
      <main>
        <MainVisual />
        <div className="scroll-indicator" aria-hidden="true">
          SCROLL
        </div>
        <div className="tab">
          <div className="tab__inner">
            <div className="tab__wrap">

              <div className='tab__nameArea'>
                <em className="tab__title" id={titleId}>
                  Choose my feature
                </em>

                <div
                  role="tablist"
                  className="tab__btnList"
                  aria-labelledby={titleId}
                >
                  {tabs.map((tab, i) => (
                    <button
                      key={i}
                      id={getBtnId(i)}
                      role="tab"
                      type="button"
                      className="portfolio-btn"
                      aria-selected={activeIndex === i}
                      aria-controls={getPanelId(i)}
                      onClick={() => selectTab(i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      tabIndex={activeIndex === i ? 0 : -1}
                    >
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>


              <div className="tab__content">
                {tabs.map((tab, i) => (
                  <div
                    key={i}
                    id={getPanelId(i)}
                    role="tabpanel"
                    aria-labelledby={getBtnId(i)}
                    className={`tab__panel${activeIndex === i ? ' is-show' : ''}`}
                    hidden={activeIndex !== i}
                  >
                    <tab.Component />
                  </div>
                ))}
              </div>



            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
