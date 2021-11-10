import React from "react";
import Header from "../shared/components/Header";
import Footer from "../shared/components/Footer";
import "../css/AboutPage.css";
import about_img from "../images/about-img.jpeg";
const AboutPage = () => {
  return (
    <div>
      <Header title="AboutPage" />
      <section className="Wrapper about-us">
        <div className="about-us__inner">
          <div className="about-us__content">
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p id="about-us__content--paragraph1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae atque a facere nemo delectus. atque a facere nemo
              delectus.
            </p>
            <ul>
              <li className="about-us__content--icon">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat
              </li>
              <li className="about-us__content--icon">
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li className="about-us__content--icon">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </li>
            </ul>
            <p id="about-us__content--paragraph2">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
          <div className="about-us__image">
            <img src={about_img} alt="about img" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
