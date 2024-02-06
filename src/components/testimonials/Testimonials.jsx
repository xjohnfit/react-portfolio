import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/testimonial-photo1.jpg";
import AVATAR2 from "../../assets/testimonial-photo2.jpg";
import AVATAR3 from "../../assets/testimonial-photo3.jpg";

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name: "Mike",
    review:
      "I cannot express enough gratitude for the exceptional website development services provided by John. From the initial consultation to the final launch, their team demonstrated a level of professionalism, expertise, and creativity that exceeded our expectations.",
  },
  {
    avatar: AVATAR2,
    name: "Chantal",
    review:
      "The website developed has not only elevated our online presence but has also significantly enhanced the overall user experience for our customers. The seamless navigation, responsive design, and intuitive layout have received positive feedback from both clients and internal stakeholders.",
  },
  {
    avatar: AVATAR3,
    name: "Jess",
    review:
      "I highly recommend John for anyone seeking top-notch website development services. His expertise, professionalism, and commitment to client satisfaction make him a standout choice in the industry. Thank you.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="AVATAR" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
