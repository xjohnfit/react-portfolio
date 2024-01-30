import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5"
import { CiUser } from "react-icons/ci"
import { BiBook } from "react-icons/bi"

const Nav = () => {
  return (
    <nav>
      <a href="#"><IoHomeOutline /></a>
      <a href="#about"><CiUser /></a>
      <a href="#experience"><BiBook /></a>
      <a href="#services"><IoHomeOutline /></a>
      <a href="#contact"><IoHomeOutline /></a>
    </nav>
  )
}

export default Nav