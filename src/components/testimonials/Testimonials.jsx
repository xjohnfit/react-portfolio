import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/headshot.jpg'

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
      <article className='testimonial'>
        <div className="client__avatar">
          <img src={AVATAR1} alt="AVATAR" />
        </div>
        <h5 className='client_name'>John Rocha</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero earum perferendis laudantium impedit ex aliquid, ipsum, blanditiis quibusdam necessitatibus corrupti animi vitae. Molestiae amet nihil illum ipsam temporibus. Tempora, corrupti!
          </small>
      </article>

      <article className='testimonial'>
        <div className="client__avatar">
          <img src={AVATAR1} alt="AVATAR" />
        </div>
        <h5 className='client_name'>John Rocha</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero earum perferendis laudantium impedit ex aliquid, ipsum, blanditiis quibusdam necessitatibus corrupti animi vitae. Molestiae amet nihil illum ipsam temporibus. Tempora, corrupti!
          </small>
      </article>

      <article className='testimonial'>
        <div className="client__avatar">
          <img src={AVATAR1} alt="AVATAR" />
        </div>
        <h5 className='client_name'>John Rocha</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero earum perferendis laudantium impedit ex aliquid, ipsum, blanditiis quibusdam necessitatibus corrupti animi vitae. Molestiae amet nihil illum ipsam temporibus. Tempora, corrupti!
          </small>
      </article>
      </div>
    </section>
  )
}

export default Testimonials