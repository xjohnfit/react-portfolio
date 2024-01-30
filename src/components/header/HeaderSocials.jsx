import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/xjohnfit/" target="_blank" rel="noreferrer"><FaLinkedin size={50} /></a>
        <a href="https://github.com/xjohnfit" target="_blank" rel="noreferrer"><FaGithub size={50} /></a>
        <a href="https://www.instagram.com/xjohnfitcodes/" target="_blank" rel="noreferrer"><FaInstagram size={50} /></a>
    </div>
  )
}

export default HeaderSocials