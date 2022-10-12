import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

function Testimonials() {
  const clients = [
    {
      img: profilePic1,
      review:
        "I just gave my requirements and  Umair Azmat created our website the way we exactly wanted to see without asking so many questions. The final product came out really good. I’m really so glad that I have chosen right person to create our Ecommerce website.",
    },
    {
      img: profilePic2,
      review:
        "Umair Azmat delivered above and beyond my expectations. I would love to work with him and I am working with him. Without exception, remarkably professional! I am more than happy with our collaboration! . Good Luck Umair Azmat.",
    },
    {
      img: profilePic3,
      review:
        "I was looking for a Web professional who would create and evolve my website. Umair Azmat delivers exactly what I want. It’s always a pleasure working and seeing him. I enjoy meeting him as he lives locally and I always leave his place with a spring in my step and a smile on my face. I know he will keep improving my website and advising me in the best ways forward for years to come, with SEO and new features. I look forward to a great working relationship and friendship with him.",
    },
    {
      img: profilePic4,
      review:
        "Always available to help, incredibly proficient, hits deadlines without fail, hard working and trustworthy. In my experience, no project is too much trouble, and with Umair Azmat you really get a rare entity – someone that can simplify what can be a very complex industry at times. I can recommend his services without hesitation.",
    },
  ];
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonials;
