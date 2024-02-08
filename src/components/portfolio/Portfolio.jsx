import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio-01.webp";
import IMG2 from "../../assets/portfolio-02.jpg";
import IMG3 from "../../assets/portfolio-03.jpg";
import IMG4 from "../../assets/portfolio-04.jpg";
import IMG5 from "../../assets/portfolio-05.jpg";
import IMG6 from "../../assets/portfolio-06.jpg";
import IMG7 from "../../assets/portfolio-07.png";
import IMG8 from "../../assets/portfolio-08.jpg";
import IMG9 from "../../assets/portfolio-09.png";
import IMG10 from "../../assets/portfolio-10.webp"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Coach Me Now",
    github: "http://github.com",
    demo: "https://coachmenow.xjohnfit.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Sign Up/Login/CRUD",
    github: "http://github.com",
    demo: "http://",
  },
  {
    id: 3,
    image: IMG3,
    title: "To-Do List App",
    github: "https://todoapp.xjohnfit.com/",
    demo: "https://todoapp.xjohnfit.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Flight Widget Vanilla JavaScript",
    github: "https://github.com/xjohnfit/flight-widget-vanilla-js",
    demo: "https://flightwidget.xjohnfit.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Vanilla JavaScript Calculator",
    github: "https://github.com/xjohnfit/js-calculator",
    demo: "https://calculator.xjohnfit.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Chantal's Penguin",
    github: "https://github.com/xjohnfit/fcc-penguin",
    demo: "https://penguin.xjohnfit.com/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Weather APP",
    github: "https://github.com/xjohnfit/react-weather-app",
    demo: "https://xjohnfit.github.io/react-weather-app/",
  },
  {
    id: 8,
    image: IMG8,
    title: "City Skyline",
    github: "https://github.com/xjohnfit/fcc-city-skyline",
    demo: "https://skyline.xjohnfit.com/",
  },
  {
    id: 9,
    image: IMG9,
    title: "Crypto Dashboard",
    github: "https://github.com/xjohnfit/crypto-dashboard",
    demo: "https://xjohnfit.github.io/crypto-dashboard/",
  },
  {
    id: 10,
    image: IMG10,
    title: "MERN BookStore App",
    github: "https://github.com/xjohnfit/BookStore-MERN-Stack",
    demo: "https://bookstore.codewithxjohn.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Personal Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{ title }</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
