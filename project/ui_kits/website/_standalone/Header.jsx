/* Header — top nav with badge logo, season nav, lang toggle, ticket CTA. */
const Header = ({ activeSeason = "2026/27" }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="ewo-header">
      <div className="ewo-header-inner">
        <a className="ewo-header-mark" href="#" aria-label="תזמורת ירושלים מזרח ומערב">
          <img src={window.__resources.logoLight} alt="" width="56" height="56" />
        </a>

        <nav className="ewo-nav" aria-label="ניווט ראשי">
          <a href="#season">העונה</a>
          <a href="#concerts">קונצרטים</a>
          <a href="#about">אודות התזמורת</a>
          <a href="#tomcohen">תום כהן</a>
          <a href="#contact">צרו קשר</a>
        </nav>

        <div className="ewo-header-actions">
          <button className="ewo-season-pill" onClick={() => setOpen(o => !o)}>
            <span className="ewo-season-pill-label">עונה</span>
            <span className="ewo-season-pill-value">{activeSeason}</span>
            <span className="ewo-season-pill-arrow">▾</span>
          </button>
          <div className="ewo-lang">
            <span className="ewo-lang-active">עב</span>
            <span className="ewo-lang-sep">/</span>
            <a href="#" className="ewo-lang-link">EN</a>
            <span className="ewo-lang-sep">/</span>
            <a href="#" className="ewo-lang-link">ع</a>
          </div>
          <a href="#tickets" className="ewo-btn ewo-btn-primary">
            כרטיסים <span className="ewo-arrow">←</span>
          </a>
        </div>
      </div>
    </header>
  );
};

window.Header = Header;
