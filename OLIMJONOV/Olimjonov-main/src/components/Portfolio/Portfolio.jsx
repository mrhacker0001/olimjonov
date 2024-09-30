import React, { useEffect } from "react";
import "./Portfolio.css";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Portfolio = () => {
  const slider = [
    {
      id: 0,
      projectPortfolio: require("../../assets/work2.png"),
      namePortfolio: "Explore Travel",
      descriptionPortfolio:
        "Explore TravelCountries and cities that are convenient for traveling, all of them are embodied in Wxplore Travel",
      linkPortfolio: "https://travel-pi-nine.vercel.app/",
    },
    {

      id: 1,
      projectPortfolio: require("../../assets/work5.png"),
      namePortfolio: "Flower Shop",
      descriptionPortfolio:
        "Flower Shoop this website you can buy various popular flowers",
      linkPortfolio: "https://flower-shop-no1.netlify.app/",
    },
    {

      id: 2,
      projectPortfolio: require("../../assets/work1.png"),
      namePortfolio: "Burger Cafe",
      descriptionPortfolio:
        "Various burgers, various drinks and desserts can be ordered on the website",
      linkPortfolio: "https://burger-shopp.vercel.app/",
    },

    {

      id: 3,
      projectPortfolio: require("../../assets/work3.png"),
      namePortfolio: "Photobrix",
      descriptionPortfolio:
        "On this website you can generate your images with 12 different styles of black awesome backgrounds",
      linkPortfolio: "https://photbrix-project.vercel.app/",
    },

    {

      id: 4,
      projectPortfolio: require("../../assets/work4.png"),
      namePortfolio: "Lexus Test",
      descriptionPortfolio:
        "Lexus Test is a website where you can buy Lexus cars and customize them with different colors",
      linkPortfolio: "https://test-driving.vercel.app/",
    },

    {

      id: 5,
      projectPortfolio: require("../../assets/work5.png"),
      namePortfolio: "Flower Shop",
      descriptionPortfolio:
        "Flower Shoop this website you can buy various popular flowers",
      linkPortfolio: "https://flower-shop-no1.netlify.app/",
    },
    {

      id: 6,
      projectPortfolio: require("../../assets/workk.png"),
      namePortfolio: "Weather App",
      descriptionPortfolio:
        "Weather app, on this website you can check the weather of any country or city",
      linkPortfolio: "https://weather-13.vercel.app/",
    },
    {
      id: 7,
      projectPortfolio: require("../../assets/work6.png"),

      namePortfolio: "Kinoman UZ",
      descriptionPortfolio:
        "Kinoman UZ, on this website you can watch any movie for free in 4k 8k graphics",
      linkPortfolio: "",
    },
    
    {
      id: 8 ,
      projectPortfolio: require("../../assets/work11.png"),
      namePortfolio: "Afitsant Res",
      descriptionPortfolio:
        "Waiter A website that monitors everything that the online magazine uses commands" ,
      linkPortfolio: "https://epos-waiter.netlify.app/rooms",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <section className="portfolio section portfolio-container" id="portfolio">
      <div className="title-portfolio">
        <h2 data-aos="zoom-in" data-aos-delay="50" className="section__title">
        Portfolio
        </h2>
        <span
          data-aos-delay="100"
          data-aos="zoom-in"
          className="section__subtitle"
        >
          Most recent work
        </span>
      </div>
      <Swiper
        className="portfolio__container"
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
      >
        {slider.map(
          ({
            id,
            linkPortfolio,
            projectPortfolio,
            namePortfolio,
            descriptionPortfolio,
          }) => {
            return (
              <SwiperSlide
                className="portfolio__card"
                key={id}
                style={{ width: "200px" }}
              >
                <img src={projectPortfolio} alt="" className="portfolio__img" />
                <div className="text-portfolio">
                  <h3 >{namePortfolio}</h3>
                  <p >
                    {descriptionPortfolio}
                  </p>
                  <a
                    href={linkPortfolio}
                    className="contact__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Look
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};

export default Portfolio;
