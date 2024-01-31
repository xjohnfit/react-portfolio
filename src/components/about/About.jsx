import React from 'react'
import './about.css'
import ME from '../../assets/headshot.jpg'
import { FiAward } from "react-icons/fi";
import { FiUsers } from 'react-icons/fi';
import { FaRegFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>8+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <FaRegFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </article>
          </div>
          <div className="background__container">
            <p>Full-stack web developer with over 7 years of experience analyzing, designing,
developing, and integrating front-end & back-end-based applications, possesses
knowledge of web applications using HTML, CSS, JavaScript, ReactJS, PHP and
Laravel. Key achievement: created a web application consuming an API that
allowed users to search for the weather anywhere in the world.</p>
          </div>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About