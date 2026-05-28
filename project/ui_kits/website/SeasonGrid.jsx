/* SeasonGrid — 2x2 of poster-style concert tiles. Mirrors the printed
 * season postcard layout, with hover-lift to suggest interactivity. */

const POSTERS = [
  { id: "shotei",   img: "../../assets/poster-avraham-tal.jpg", title: "בחזרה אל \u201cשוטי הנבואה\u201d", artist: "אברהם טל",           date: { d: "14", m: "נוב", y: "2026" }, venue: "היכל התרבות, ת״א" },
  { id: "diyokan",  img: "../../assets/poster-itzik-kala.jpg",  title: "דיוקן אמן / תחנות בזמן",          artist: "איציק קלה",          date: { d: "08", m: "ינו", y: "2027" }, venue: "תיאטרון ירושלים" },
  { id: "popicon",  img: "../../assets/poster-pop-icon.jpg",    title: "פוף אייקון",                       artist: "ואלרי חמאתי וליראז צ\u2019רדלי", date: { d: "20", m: "מרץ", y: "2027" }, venue: "אולם צ׳ארלס ברונפמן" },
  { id: "hiluma",   img: "../../assets/poster-hiluma.jpg",      title: "היהלום III",                       artist: "תום כהן",            date: { d: "12", m: "יוני", y: "2027" }, venue: "אוטופיה, גני יהושע" },
];

const PosterTile = ({ p, onClick }) => (
  <a className="ewo-poster" href={`#${p.id}`} onClick={onClick}>
    <div className="ewo-poster-image">
      <img src={p.img} alt={p.title} />
    </div>
    <div className="ewo-poster-meta">
      <div className="ewo-poster-date">
        <span className="ewo-poster-day">{p.date.d}</span>
        <span className="ewo-poster-mo">{p.date.m}</span>
      </div>
      <div className="ewo-poster-body">
        <h3 className="ewo-poster-title">{p.title}</h3>
        <div className="ewo-poster-artist">{p.artist}</div>
        <div className="ewo-poster-venue">{p.venue}</div>
      </div>
    </div>
  </a>
);

const SeasonGrid = () => (
  <section id="season" className="ewo-section ewo-season-grid-section">
    <header className="ewo-section-head">
      <span className="ewo-section-eyebrow">העונה · ארבעה קונצרטים</span>
      <h2 className="ewo-section-title">תוכנית 2026/2027</h2>
    </header>
    <div className="ewo-season-grid">
      {POSTERS.map(p => <PosterTile key={p.id} p={p} />)}
    </div>
  </section>
);

window.SeasonGrid = SeasonGrid;
window.POSTERS = POSTERS;
