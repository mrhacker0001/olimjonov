import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/_olimjonov.o_/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://t.me/olimjonov_fullstack"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-telegram"></i>
        {/* dribble */}
      </a>
      <a
        href="https://github.com/0limjonov"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
