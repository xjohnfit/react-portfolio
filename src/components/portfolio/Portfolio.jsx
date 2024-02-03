import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-01.jpg'
import IMG2 from '../../assets/portfolio-02.jpg'
import IMG3 from '../../assets/portfolio-03.jpg'
import IMG4 from '../../assets/portfolio-04.jpg'
import IMG5 from '../../assets/portfolio-05.jpg'
import IMG6 from '../../assets/portfolio-06.jpg'
import IMG7 from '../../assets/portfolio-07.jpg'
import IMG8 from '../../assets/portfolio-08.jpg'
import IMG9 from '../../assets/portfolio-09.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio 1" />
          </div>
          <h3>Title</h3>
            <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn'>GitHub</a>
            <a href="http://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio 1" />
          </div>
          <h3>Title</h3>
            <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn'>GitHub</a>
            <a href="http://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio 1" />
          </div>
          <h3>Title</h3>
            <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn'>GitHub</a>
            <a href="http://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio 1" />
          </div>
          <h3>Title</h3>
            <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn'>GitHub</a>
            <a href="http://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio 1" />
          </div>
          <h3>Title</h3>
            <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn'>GitHub</a>
            <a href="http://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio 1" />
          </div>
          <h3>Title</h3>
            <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn'>GitHub</a>
            <a href="http://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio 1" />
          </div>
          <h3>Title</h3>
            <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn'>GitHub</a>
            <a href="http://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio 1" />
          </div>
          <h3>Title</h3>
            <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn'>GitHub</a>
            <a href="http://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio