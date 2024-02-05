import React from 'react'
import './services.css'

import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' size={100} />
              <p>That's one of my best skills right there! Passion for backend programming using PHP, with Laravel framework. Working on some new projects at the moment, soon they will available online. </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' size={100} />
              <p>Love working with design, from the structure (HTML), to the styles (CSS), please check my GitHub for specific little projects using HTML/CSS/JavaScript. Also, don't forget to send me a message about my projects. </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' size={100} />
              <p>People say I can be creative, able to think outside the box and come up with unique ideas, I'm always thinking about new projects and how I can change the world using technology. </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services