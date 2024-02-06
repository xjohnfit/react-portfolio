import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='footer'>
        <div className='footer__logo'></div>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonial">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
        <a href="https://www.linkedin.com/in/xjohnfit/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/xjohnfit" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://facebook.com/xjohnfit" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com/xjohnfitcodes" target="_blank" rel="noreferrer"><IoLogoInstagram /></a>
          <a href="https://x.com/xjohnfit" target="_blank" rel="noreferrer"><BsTwitterX /></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; John Rocha Web Develoment All Rights Reserved</small>
          <p>Portfolio Written in ReactJS <FaReact /></p>
        </div>
    </footer>
  )
}

export default Footer