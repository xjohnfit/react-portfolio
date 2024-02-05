import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>xjohnfitcodes@gmail.com</h5>
            <a href="mailto:xjohnfitcodes@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Messenger</h4>
            <h5>xjohnfit</h5>
            <a href="mailto:xjohnfitcodes@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>xjohnfitcodes@gmail.com</h5>
            <a href="mailto:xjohnfitcodes@gmail.com">Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact