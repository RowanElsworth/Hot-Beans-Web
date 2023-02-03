
import { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Header } from "../../components/Header"
import { Footer } from "../../components/footer";

import "./Recources.scss"

export default function App() {
  useEffect(() => {
    document.title = "Hot Beans Web | Contact"
  }, []);
    return (
        <>
          <Header />
          <section className="resource-scroll">
          <Swiper
            navigation={true}
            slidesPerView={3.2}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            modules={[Navigation]}
            className="mySwiper3"
          >
            <SwiperSlide>
              <div className="site-1">
                <a href="https://www.freecodecamp.org/" rel="noreferrer" target="_blank" className="site-hover">
                  <p>FreeCodeCamp</p>
                  <p>For everything from basic HTML to  Python machine learning all in interactive lessons.</p>
                  <p>View</p>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="site-2">
                <a href="https://www.w3schools.com/" rel="noreferrer" target="_blank" className="site-hover">
                  <p>w3schools</p>
                  <p>For everything from basic HTML to  Python machine learning all in interactive lessons.</p>
                  <p>View</p>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="site-3">
                <a href="https://www.khanacademy.org/" rel="noreferrer" target="_blank" className="site-hover">
                  <p>khanacademy</p>
                  <p>For everything from basic HTML to  Python machine learning all in interactive lessons.</p>
                  <p>View</p>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="site-4">
                <a href="https://www.codecademy.com/" rel="noreferrer" target="_blank" className="site-hover">
                  <p>codecademy</p>
                  <p>For everything from basic HTML to  Python machine learning all in interactive lessons.</p>
                  <p>View</p>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="site-5">
                <a href="https://www.freecodecamp.org/" rel="noreferrer" target="_blank" className="site-hover">
                  <p>FreeCodeCamp</p>
                  <p>For everything from basic HTML to  Python machine learning all in interactive lessons.</p>
                  <p>View</p>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          </section>
          <section className="newsletter">
            <p>Sign up for our newsletter!</p>
            <form action="">
              <div className="input-wrapper">
                <div className="name-box">
                  <label htmlFor="">Name</label>
                  <input type="text" />
                </div>
                <div className="email-box">
                  <label htmlFor="">Email</label>
                  <input type="email" />
                </div>
              </div>
              <input type="submit" className="submit-btn"/>
            </form>
          </section>
          <Footer />
        </>
    )
}