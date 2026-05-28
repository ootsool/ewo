/* Additional homepage sections — mirrors the section flow of tjo.co.il
 * (featured concert, video reel, Instagram grid, support callout, newsletter).
 * Components exported to window so they're available to the inline App. */

/* ───────── Featured concert — large editorial block ───────── */
const FeaturedConcert = ({ concert }) => (
  <section className="ewo-featured" data-screen-label="03 Featured">
    <div className="ewo-featured-inner">
      <div className="ewo-featured-side">
        <span className="ewo-featured-eyebrow">לא מפסיקים ליצור · קונצרט פתיחת העונה</span>
        <h2 className="ewo-featured-title">{concert.title}</h2>
        <div className="ewo-ornament" aria-hidden="true">·  ·  ·  ◆  ·  ·  ·</div>
        <p className="ewo-featured-body">{concert.body}</p>
        <div className="ewo-featured-meta">
          <span><b>{concert.artist}</b></span>
          <span className="ewo-cc-dot">·</span>
          <span>{concert.date.d} {concert.date.m} {concert.date.y}</span>
          <span className="ewo-cc-dot">·</span>
          <span>{concert.venue}</span>
        </div>
        <div className="ewo-featured-cta">
          <a href={"#" + concert.id} className="ewo-btn ewo-btn-primary">לרכישת כרטיסים <span className="ewo-arrow">←</span></a>
          <a href="#season"          className="ewo-btn ewo-btn-ghost">כל הקונצרטים</a>
        </div>
      </div>
      <figure className="ewo-featured-image">
        <img src={concert.img} alt={concert.title} />
      </figure>
    </div>
  </section>
);

/* ───────── Video reel — YouTube tiles ───────── */
const VIDEOS = [
  { id: "CatX0_us-jY", title: "סימפוזיון תזמורות הנוער",          subtitle: "29.4.26 · יפו" },
  { id: "OcDFt-pG3I4", title: "כוכב המזרח · זהבה בן שרה אום כלתום", subtitle: "טריילר · מאי-יוני" },
  { id: "ttTG3Iop85c", title: "בניה ברבי · שפת הים התיכון",         subtitle: "ברחבי הארץ" },
  { id: "JH6uHRwCJ1c", title: "תזמורת הנוער מזרח ומערב גליל",       subtitle: "סמינר חורף 26-25" },
  { id: "NHGW3TRnjGA", title: "מתי כספי · Animals Medley",          subtitle: "פסטיבל ירושלים, 2024" },
  { id: "KfQLMfKmiuc", title: "עונת המנויים 26-25",                  subtitle: "טריילר עונתי" },
];

const VideoTile = ({ v }) => (
  <a className="ewo-vid" href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer">
    <div className="ewo-vid-thumb">
      <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} loading="lazy" />
      <span className="ewo-vid-play" aria-hidden="true">▶</span>
    </div>
    <div className="ewo-vid-meta">
      <div className="ewo-vid-title">{v.title}</div>
      <div className="ewo-vid-sub">{v.subtitle}</div>
    </div>
  </a>
);

const VideoReel = () => (
  <section className="ewo-section ewo-vidreel-section" data-screen-label="05 Videos">
    <header className="ewo-section-head">
      <span className="ewo-section-eyebrow">וידאו</span>
      <h2 className="ewo-section-title">צופים בתזמורת</h2>
    </header>
    <div className="ewo-vidreel-grid">
      {VIDEOS.map(v => <VideoTile key={v.id} v={v} />)}
    </div>
    <div className="ewo-vidreel-cta">
      <a href="https://www.youtube.com/@TJOEW" className="ewo-btn ewo-btn-ghost-dark">לערוץ היוטיוב שלנו</a>
    </div>
  </section>
);

/* ───────── Digital callout ───────── */
const DigitalCallout = () => (
  <section className="ewo-digital" data-screen-label="06 Digital">
    <div className="ewo-digital-inner">
      <h2 className="ewo-digital-title">התזמורת מגיעה אליכם בדיגיטל</h2>
      <p className="ewo-digital-body">
        קונצרטים חדשים, הופעות חיות בשידור, פסטיבלים — הכל אונליין ברשתות החברתיות. התחברו אלינו.
      </p>
      <div className="ewo-digital-row">
        <a className="ewo-digital-chip" href="https://www.youtube.com/@TJOEW"                               target="_blank" rel="noopener noreferrer">YouTube</a>
        <a className="ewo-digital-chip" href="https://www.instagram.com/jerusalem_orchestra_east_west/"     target="_blank" rel="noopener noreferrer">Instagram</a>
        <a className="ewo-digital-chip" href="https://www.facebook.com/JerusalemOrchestra"                  target="_blank" rel="noopener noreferrer">Facebook</a>
        <a className="ewo-digital-chip" href="https://open.spotify.com/artist/4avYLz1uahW0eNWd3eOst6"       target="_blank" rel="noopener noreferrer">Spotify</a>
      </div>
    </div>
  </section>
);

/* ───────── Instagram feed — 6 tiles using the local posters as stand-ins ───────── */
const IG_TILES = [
  { img: window.__resources.posterAvrahamTal, caption: "אברהם טל · בחזרה אל שוטי הנבואה" },
  { img: window.__resources.posterHiluma,     caption: "תום כהן · היהלום III" },
  { img: window.__resources.posterPopIcon,    caption: "פוף אייקון · ואלרי וליראז" },
  { img: window.__resources.posterItzikKala,  caption: "איציק קלה · דיוקן אמן" },
  { img: window.__resources.postcardSeason,   caption: "עונת המנויים 2026/2027" },
  { img: window.__resources.posterAvrahamTal, caption: "טעימה מאתמול באשקלון" },
];

const InstagramFeed = () => (
  <section className="ewo-ig" data-screen-label="07 Instagram">
    <header className="ewo-section-head">
      <span className="ewo-section-eyebrow">אינסטגרם · @jerusalem_orchestra_east_west</span>
      <h2 className="ewo-section-title">מאחורי הקלעים</h2>
    </header>
    <div className="ewo-ig-grid">
      {IG_TILES.map((t, i) => (
        <a key={i} className="ewo-ig-tile" href="https://www.instagram.com/jerusalem_orchestra_east_west/" target="_blank" rel="noopener noreferrer">
          <img src={t.img} alt={t.caption} loading="lazy" />
          <div className="ewo-ig-overlay">
            <span className="ewo-ig-icon" aria-hidden="true">◆</span>
            <span className="ewo-ig-caption">{t.caption}</span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

/* ───────── Friends-of-the-orchestra support callout ───────── */
const SupportCallout = () => (
  <section className="ewo-support" data-screen-label="08 Support">
    <div className="ewo-support-inner">
      <div className="ewo-support-copy">
        <span className="ewo-support-eyebrow">תמיכה בתזמורת</span>
        <h2 className="ewo-support-title">בואו להיות חלק מהמסע</h2>
        <p className="ewo-support-body">
          לאורך השנים זכינו והתברכנו בחברות וחברים שהצטרפו אל המסע שלנו ברמה אישית — לתמיכה כלכלית,
          לקשרים בחו"ל, לשיתופי פעולה עסקיים, ולעיתים גם פשוט בעצה טובה.
        </p>
        <div className="ewo-support-cta">
          <a href="#aguda"  className="ewo-btn ewo-btn-primary">אגודת הידידים <span className="ewo-arrow">←</span></a>
          <a href="#donate" className="ewo-btn ewo-btn-ghost">לתרומה לתזמורת</a>
        </div>
      </div>
      <div className="ewo-support-mark" aria-hidden="true">
        <svg viewBox="0 0 200 200" width="200" height="200">
          <g fill="var(--ewo-cream)" opacity="0.85">
            <circle cx="40" cy="120" r="22"/>
            <circle cx="100" cy="100" r="34"/>
            <circle cx="170" cy="130" r="20"/>
          </g>
          <g fill="var(--ewo-navy)">
            <rect x="64" y="148" width="22" height="22" transform="rotate(45 75 159)"/>
            <rect x="116" y="148" width="22" height="22" transform="rotate(45 127 159)"/>
          </g>
        </svg>
      </div>
    </div>
  </section>
);

/* ───────── Newsletter signup ───────── */
const Newsletter = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const onSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  return (
    <section className="ewo-news" data-screen-label="09 Newsletter">
      <div className="ewo-news-inner">
        <div className="ewo-news-copy">
          <span className="ewo-section-eyebrow">דיוור</span>
          <h2 className="ewo-news-title">הרשמה לחדשות ועדכונים</h2>
          <p className="ewo-news-body">קבלו עדכונים על מופעים קרובים, מועדי מנוי, והטבות.</p>
        </div>
        {submitted ? (
          <div className="ewo-news-thanks">
            <div className="ewo-news-thanks-mark" aria-hidden="true">◆</div>
            <div>
              <div className="ewo-news-thanks-title">תודה שנרשמת</div>
              <div className="ewo-news-thanks-sub">נשמור על קשר.</div>
            </div>
          </div>
        ) : (
          <form className="ewo-news-form" onSubmit={onSubmit}>
            <input type="text"  placeholder="שם"     aria-label="שם" />
            <input type="email" placeholder="אימייל"  aria-label="אימייל" required />
            <input type="tel"   placeholder="טלפון"   aria-label="טלפון" />
            <button type="submit" className="ewo-btn ewo-btn-primary">שליחה <span className="ewo-arrow">←</span></button>
          </form>
        )}
      </div>
    </section>
  );
};

Object.assign(window, {
  FeaturedConcert, VideoReel, DigitalCallout, InstagramFeed, SupportCallout, Newsletter,
});
