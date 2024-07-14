import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ homeButtonClick }) => {
  return (
    <footer className="footer">
      <h2 className="footer__copyright">
        © 2020 Supersite, Powered by News API
      </h2>
      <div className="footer__block">
        <div className="footer__block-bottoms">
          <Link
            to="/"
            className="footer__block-buttons-home"
            type="button"
            onClick={homeButtonClick}
          >
            Home
          </Link>
          <Link
            to="https://tripleten.co.il/?utm_term=tripleten&utm_campaign=inhouse_gl_isr_courselanding_brand_ua_sem_callback_22012024&utm_source=adwords&utm_medium=ppc&hsa_acc=4062807298&hsa_cam=20966448682&hsa_grp=163241978852&hsa_ad=688573041355&hsa_src=g&hsa_tgt=kwd-2087159963733&hsa_kw=tripleten&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwg8qzBhAoEiwAWagLrIIVHXzE8XMfKq6WfjrVvtRbYsnu-nk8agASHCSx6HRj47ezouvolhoC5gsQAvD_BwE"
            className="footer__block-buttons-tripleTen"
            type="button"
          >
            TripleTen
          </Link>
        </div>
        <div className="footer__block-links">
          <a
            className="footer__block-icon-github"
            href="https://github.com/flysputnik17/news_explorer_frontend"
          ></a>
          <a className="footer__block-buttons-facebook" href="/"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
