/* Footer — navy field, minimal links, ministry credit. */

const Footer = () => (
  <footer className="ewo-footer">
    <div className="ewo-footer-inner">
      <div className="ewo-footer-mark">
        <img src="../../assets/logo-dark.png" alt="" width="92" height="92" />
      </div>

      <div className="ewo-footer-cols">
        <div className="ewo-footer-col">
          <h4 className="ewo-footer-h">התזמורת</h4>
          <a href="#about">אודות</a>
          <a href="#tomcohen">תום כהן</a>
          <a href="#musicians">המוזיקאים</a>
          <a href="#press">עיתונות</a>
        </div>
        <div className="ewo-footer-col">
          <h4 className="ewo-footer-h">קונצרטים</h4>
          <a href="#season">עונה 2026/2027</a>
          <a href="#archive">ארכיון עונות</a>
          <a href="#tickets">הזמנת כרטיסים</a>
          <a href="#subscription">מינויים</a>
        </div>
        <div className="ewo-footer-col">
          <h4 className="ewo-footer-h">מידע</h4>
          <a href="#contact">צרו קשר</a>
          <a href="#accessibility">נגישות</a>
          <a href="#newsletter">דיוור</a>
          <a href="#privacy">פרטיות</a>
        </div>
      </div>

      <div className="ewo-footer-tail">
        <p className="ewo-footer-credit">
          בתמיכת משרד התרבות והספורט · נבחרה כתזמורת מובילה בישראל, ספטמבר 2022
        </p>
        <div className="ewo-footer-social">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="YouTube">YT</a>
          <a href="#" aria-label="Spotify">SP</a>
        </div>
      </div>
    </div>
  </footer>
);

window.Footer = Footer;
