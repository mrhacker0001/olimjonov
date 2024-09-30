import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section " id="services">
      <h2 className="section__title" data-aos="zoom-in" data-aos-delay="50">
        Services  
      </h2>
      <span
        className="section__subtitle"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        What i offer
      </span>

      <div className="services__container container grid">
        
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Front-end <br /> Back-end
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View-More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
              We work hard to make you feel confident and
              high standard of quality in our services.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Development of full-stack applications with an emphasis on aesthetics and
                  performance.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                   Creating web applications with front-end and back-end.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Elegant front-end and back-end integration for your
                  project.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  A thoughtful combination of front-end and back-end to create
                  impressive web applications.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Creation of web projects with impeccable design and
                  functionality at all levels.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br />
              Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
          View-More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">
              Create impressive and intuitive user interfaces
                interfaces that inspire, surprise and make life easier
                our users. We strive for excellence in every
                details so that every user of our product feels
                yourself valuable and confident in its use.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Custom user interface design,
                  matching your brand.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Create attractive layouts and designs for products and
                  services of companies.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Interface design that increases conversion and
                  customer satisfaction<div className=""></div>
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Building creative and easy to use
                  user interface for your product or service.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  A user interface that grabs attention and
                    leaves an impression.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-robot services__icon"></i>
            <h3 className="services__title">
              Telegram <br /> Bots
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
          View-More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Telegram bots</h3>
              <p className="services__modal-description">
              Our passions translate into innovative solutions to create
                Telegram bots that inspire, attract and surprise our
                customers, making their experience unique.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Development of a smart and intuitive Telegram bot.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Custom Telegram bots: Tailored to your needs
                  needs.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Creating a personalized bot for Telegram with high
                  functionality.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Bots for Telegram that make your life easier and your
                  business more successful.
                  </p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil  uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Advanced Telegram bots: A new level of communication and
                    automation.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
