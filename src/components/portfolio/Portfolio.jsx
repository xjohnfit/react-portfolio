import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <div className="portfolio__item">
          <div className="portfolio__item-image">
            <h3>Title</h3>
            <a href="http://github.com" className='btn'>GitHub</a>
            <a href="http://github.com" className='btn btn-primary'>Demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio