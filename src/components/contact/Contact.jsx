import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { PiMessengerLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f3oglf7', 'template_1p4q2oe', form.current, {
        publicKey: 'QidgnFSXNFOJvIK-z',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <a href="mailto:xjohnfitcodes@gmail.com" target='_blank' rel="noreferrer">Send a Message</a>
          </article>

          <article className="contact__option">
            <PiMessengerLogo className='contact__option-icon' />
            <h4>Messenger</h4>
            <a href="https://m.me/xjohnfit" target='_blank' rel="noreferrer">Send a Message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=17742043060" target='_blank' rel="noreferrer">Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact