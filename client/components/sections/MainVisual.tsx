export function MainVisual() {
  return (
    <div className="mv">
      <div className="mv__intro">
        <div className="mv__wrap" style={{ textAlign: 'center' }}>
          <h1 className="mv__name">Takahiro Nishina</h1>
          <p className="mv__text">
            Hi there! I'm a <span>Web Developer</span>,<br />
            serving functional, robust, and witty applications{' '}
            <br className="u-break-pc" />
            and experiences on the Web.
          </p>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}assets/img/mv/img-01.jpg`}
          alt=""
          width={120}
          height={120}
        />
      </div>
    </div>
  );
}
