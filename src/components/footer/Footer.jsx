import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='footer'>
        <a href="#" className='footer_logo'></a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="services">Services</a></li>
          <li><a href="portfolio">Portfolio</a></li>
          <li><a href="testimonials">Testimonials</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook"><FaFacebookF /></a>
          <a href="https://instagram"><IoLogoInstagram /></a>
          <a href="https://X"><BsTwitterX /></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; John Rocha Web Develoment All Rights Reserved</small>
          <p>Portfolio Written in ReactJS <FaReact /></p>
        </div>
    </footer>
  )
}

export default Footer