import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio-01.jpg";
import IMG2 from "../../assets/portfolio-02.jpg";
import IMG3 from "../../assets/portfolio-03.jpg";
import IMG4 from "../../assets/portfolio-04.jpg";
import IMG5 from "../../assets/portfolio-05.jpg";
import IMG6 from "../../assets/portfolio-06.jpg";
import IMG7 from "../../assets/portfolio-07.jpg";
import IMG8 from "../../assets/portfolio-08.jpg";
import IMG9 from "../../assets/portfolio-09.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "IMG1",
    github: "http://github.com",
    demo: "http://",
  },
  {
    id: 2,
    image: IMG2,
    title: "IMG1",
    github: "http://github.com",
    demo: "http://",
  },
  {
    id: 3,
    image: IMG3,
    title: "IMG1",
    github: "http://github.com",
    demo: "http://",
  },
  {
    id: 4,
    image: IMG4,
    title: "IMG1",
    github: "http://github.com",
    demo: "http://",
  },
  {
    id: 5,
    image: IMG5,
    title: "IMG1",
    github: "http://github.com",
    demo: "http://",
  },
  {
    id: 6,
    image: IMG6,
    title: "IMG1",
    github: "http://github.com",
    demo: "http://",
  },
  {
    id: 7,
    image: IMG7,
    title: "IMG1",
    github: "http://github.com",
    demo: "http://",
  },
  {
    id: 8,
    image: IMG8,
    title: "IMG1",
    github: "http://github.com",
    demo: "http://",
  },
  {
    id: 9,
    image: IMG9,
    title: "IMG1",
    github: "http://github.com",
    demo: "http://",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
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
