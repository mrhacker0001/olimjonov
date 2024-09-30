import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">OLIMJONOV</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About me
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>

          <li>
            <a href="https://github.com/0limjonov" className="footer__link">
              Project
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link"></a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/_olimjonov.o_/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://t.me/https://t.me/olimjonov_fullstack"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-telegram"></i>
          </a>
          <a
            href="https://github.com/0limjonov"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/profile/view?id=ADoAAFCvGKcB562NUPjNzK83NYRl2xPe5io1X0k&trk=nav_responsive_tab_profile_pic"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; OLIMJONOV. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
