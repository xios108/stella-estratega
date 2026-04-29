function ShowcaseCard({ variant, eyebrow, title, subtitle }) {
  const isVideo = variant === 'video';

  return (
    <article className="showcase-card">
      <span className="showcase-card__eyebrow">{eyebrow}</span>
      <h3>{title}</h3>
      <p>{subtitle}</p>

      <div
        className={`showcase-card__media ${
          isVideo ? 'showcase-card__media--video' : 'showcase-card__media--lifestyle'
        }`}
      >
        {isVideo ? (
          <>
            <div className="mock-scene" aria-hidden="true" />
            <div className="play-button" aria-hidden="true">
              ▶
            </div>
            <div className="player-bar" aria-hidden="true">
              <span>▶</span>
              <div className="player-progress">
                <span />
              </div>
              <span>1:35</span>
            </div>
          </>
        ) : (
          <div className="city-scene" aria-hidden="true">
            <span className="window-line" />
            <span className="window-line" />
            <span className="window-line" />
            <span className="building" />
            <span className="building" />
            <span className="building" />
            <span className="building" />
            <span className="mug-badge">CAFÉ EN MANO<br />SUEÑOS EN ACCIÓN</span>
          </div>
        )}
      </div>
    </article>
  );
}

export default ShowcaseCard;