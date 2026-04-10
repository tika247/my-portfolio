import { useDialog } from '../hooks/useDialog';
import type { WorkEntry } from '../../types';

interface Props {
  title: string;
  entry: WorkEntry;
  index: number;
}

export function WorksDialog({ title, entry, index }: Props) {
  const { isOpen, open, close, dialogRef, handleOverlayClick } = useDialog();
  const isMovie = entry.srcType === 'movie';
  const isDesktop = entry.srcType === 'desktop';

  const dialogId = `dialog-works-${index + 1}`;

  const hasImages = Array.isArray(entry.images) && entry.images.length > 0;
  const thumbnailSrc = hasImages
    ? `${entry.imgPath}/${entry.images![0]}`
    : `${entry.imgPath}/img.jpg`;
  const captureFiles = hasImages ? entry.images!.slice(1) : [];

  return (
    <li className="works__item">
      <button
        type="button"
        className="works__btn"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={dialogId}
        onClick={open}
      >
        <h3 className="works__name">{title}</h3>
        <div className="works__img">
          <img
            src={thumbnailSrc}
            alt=""
            width={464}
            height={354}
          />
          <div className="works__layer">
            <span>detail</span>
          </div>
        </div>
      </button>

      <dialog
        ref={dialogRef}
        id={dialogId}
        className="works-dialog works-dialog-anim"
        onClick={handleOverlayClick}
        aria-label={title}
      >
        <div className="works-dialog__content">
          <button
            type="button"
            className="works-dialog__close"
            onClick={close}
            aria-label="Close dialog"
          >
            <span>Close</span>
          </button>

          <h2 className="works-dialog__title">{title}</h2>

          <table className="works-dialog__table">
            <tbody>
              <tr>
                <th>CLIENT</th>
                <td>{entry.detail.CLIENT}</td>
              </tr>
              <tr>
                <th>TECHNOLOGY</th>
                <td>{entry.detail.TECHNOLOGY}</td>
              </tr>
              {
                entry.detail.DESIGN && (
              <tr>
                <th>DESIGN</th>
                <td>{entry.detail.DESIGN}</td>
              </tr>
                )
              }
              <tr>
                <th>DETAILDS</th>
                <td>
                  {entry.detail.DETAILDS.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </td>
              </tr>
              <tr>
                <th>PERIOD</th>
                <td>{entry.detail.PERIOD}</td>
              </tr>
              <tr>
                <th>LINK</th>
                <td>
                  {typeof entry.detail.LINK === 'string' ? (
                    entry.detail.LINK
                  ) : (
                    <>
                      {entry.detail.LINK[0].map((url, i) => (
                        <a key={i} href={url} target="_blank" rel="noopener noreferrer">
                          {url}
                        </a>
                      ))}
                      {entry.detail.LINK[1] && (
                        <p>
                          <small>*{entry.detail.LINK[1]}</small>
                        </p>
                      )}
                    </>
                  )}
                </td>
              </tr>
            </tbody>
          </table>

          <div
            className={`works-dialog__srcArea${isMovie ? ' is-movie' : ''}${isDesktop ? ' is-desktop' : ''}`}
          >
            {entry.srcText.map((label, j) => (
              <div key={j} className="works-dialog__src">
                <span>{label}</span>
                {isMovie ? (
                  <video controls>
                    <source src={`${entry.imgPath}/movie-0${j + 1}.mp4`} type="video/mp4" />
                  </video>
                ) : hasImages ? (
                  <img src={`${entry.imgPath}/${captureFiles[j] ?? entry.images![0]}`} alt="" />
                ) : (
                  <img src={`${entry.imgPath}/capcha-0${j + 1}.jpg`} alt="" />
                )}
              </div>
            ))}
            {isDesktop && (
              <div className="works-dialog__src">
                <span>Movie</span>
                <small>
                  * only captured App screen itself, but actually some popups, such as about error
                  messages, is being shown up
                </small>
                <video controls>
                  <source src={`${entry.imgPath}/movie.mp4`} type="video/mp4" />
                </video>
              </div>
            )}
          </div>

          <div className="works-dialog__closeWrap">
            <button type="button" className="portfolio-btn" onClick={close}>
              <span>Close</span>
            </button>
          </div>
        </div>
      </dialog>
    </li>
  );
}
