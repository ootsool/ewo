/* Hero — subscriber-season feature with maestro portrait.
 * Models the old tjo.co.il hero: bold season tag, orchestra name, Tom Cohen
 * portrait composed with the wings illustration. */
const Hero = () => (
  <section className="ewo-hero" data-screen-label="01 Hero">
    <div className="ewo-hero-inner">
      {/* Top row — tag + title share a baseline with the figure so the
       *  bottom of the wings sits at the title's lower line. */}
      <div className="ewo-hero-stage">
        <div className="ewo-hero-headline">
          <div className="ewo-hero-tag">
            <span className="ewo-hero-tag-mark" aria-hidden="true">◆</span>
            <span>עונת המנויים</span>
            <span className="ewo-hero-tag-year">2026 — 2027</span>
          </div>
          <h1 className="ewo-hero-title">
            תזמורת ירושלים
            <span className="ewo-hero-title-row2">מזרח ומערב</span>
          </h1>
          <p className="ewo-hero-lede">
            ארבע סדרות קונצרטים שמפגישות מקאמים, מקצבים והרמוניה — מזרח ומערב באותה נשימה.
          </p>
          <div className="ewo-hero-meta">
            מנצח ראשי ומנהל מוזיקלי <span className="ewo-hero-meta-name">תום כהן</span>
          </div>
          <div className="ewo-hero-cta-row">
            <a href="#subscribe" className="ewo-btn ewo-btn-primary">מנוי לעונה <span className="ewo-arrow">←</span></a>
            <a href="#season"    className="ewo-btn ewo-btn-ghost">לוח הקונצרטים</a>
          </div>
        </div>

        <figure className="ewo-hero-portrait">
          <div className="ewo-hero-portrait-disc" aria-hidden="true"></div>
          <img
            className="ewo-hero-portrait-wings"
            src="../../assets/wings-composition.png"
            alt=""
            aria-hidden="true"
          />
          <img className="ewo-hero-portrait-img" src="../../assets/portrait-avraham-tal.png" alt="אברהם טל" />
        </figure>
      </div>
    </div>
  </section>
);

window.Hero = Hero;
