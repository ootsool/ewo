/* ConcertCard — list-style row used on the schedule page and homepage tail.
 * Reuses POSTERS from SeasonGrid if available, otherwise accepts props. */

const ConcertCard = ({ date, title, artist, venue, time = "21:00", onClick }) => (
  <article className="ewo-concert-card">
    <div className="ewo-cc-date">
      <span className="ewo-cc-day">{date.d}</span>
      <span className="ewo-cc-mo">{date.m}</span>
      <span className="ewo-cc-yr">{date.y}</span>
    </div>
    <div className="ewo-cc-rule" aria-hidden="true" />
    <div className="ewo-cc-body">
      <h3 className="ewo-cc-title">{title}</h3>
      <div className="ewo-cc-meta">
        <span>{artist}</span>
        <span className="ewo-cc-dot">·</span>
        <span>{venue}</span>
        <span className="ewo-cc-dot">·</span>
        <span>{time}</span>
      </div>
    </div>
    <button className="ewo-btn ewo-btn-secondary" onClick={onClick}>כרטיסים</button>
  </article>
);

const ConcertList = ({ items }) => (
  <section id="concerts" className="ewo-section ewo-concert-list-section">
    <header className="ewo-section-head">
      <span className="ewo-section-eyebrow">לוח הקונצרטים</span>
      <h2 className="ewo-section-title">כל המופעים הקרובים</h2>
    </header>
    <div className="ewo-concert-list">
      {items.map((p, i) => (
        <ConcertCard key={i} date={p.date} title={p.title} artist={p.artist} venue={p.venue} />
      ))}
    </div>
  </section>
);

window.ConcertCard = ConcertCard;
window.ConcertList = ConcertList;
