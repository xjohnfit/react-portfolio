import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/headshot.jpg";

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officia repellat doloribus natus ratione cum, amet facilis ex placeat quos alias accusamus commodi iusto. Magnam rerum illo odit reiciendis iusto.",
  },
  {
    avatar: AVATAR1,
    name: "John",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officia repellat doloribus natus ratione cum, amet facilis ex placeat quos alias accusamus commodi iusto. Magnam rerum illo odit reiciendis iusto.",
  },
  {
    avatar: AVATAR1,
    name: "Chantal",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officia repellat doloribus natus ratione cum, amet facilis ex placeat quos alias accusamus commodi iusto. Magnam rerum illo odit reiciendis iusto.",
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
