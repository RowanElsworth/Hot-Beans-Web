
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

import "./Resources.scss"

export default function App() {
  useEffect(() => {
    document.title = "Hot Beans Web | Resources"
  }, []);
    return (
        <>
          <Header />
          <div className="snap-wrapper">
            <section className="resource-scroll">
              <Swiper
                navigation={true}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                  600: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
                  1100: {
                    slidesPerView: 2.2,
                    spaceBetween: 30,
                  },
                  1800: {
                    slidesPerView: 3.2,
                    spaceBetween: 30,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper3"
              >
                <SwiperSlide>
                  <div className="site-1">
                    <a href="https://www.freecodecamp.org/" rel="noreferrer" target="_blank" className="site-hover">
                      <p>FreeCodeCamp</p>
                      <p>For everything from basic HTML to Python machine learning all in interactive lessons.</p>
                      <p>View</p>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="site-2">
                    <a href="https://www.w3schools.com/" rel="noreferrer" target="_blank" className="site-hover">
                      <p>w3schools</p>
                      <p>Large variety of comprehensive tutorials for web designs and more.</p>
                      <p>View</p>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="site-3">
                    <a href="https://www.khanacademy.org/" rel="noreferrer" target="_blank" className="site-hover">
                      <p>khanacademy</p>
                      <p>Lessons in computing for all ages, loads of additional resources available.</p>
                      <p>View</p>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="site-4">
                    <a href="https://www.codecademy.com/" rel="noreferrer" target="_blank" className="site-hover">
                      <p>codecademy</p>
                      <p>Interactive coding lessons, great for beginners.</p>
                      <p>View</p>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="site-5">
                    <a href="https://developer.mozilla.org/en-US/" rel="noreferrer" target="_blank" className="site-hover">
                      <p>MDN Web Docs</p>
                      <p>Comprehensive references and guides for all website needs.</p>
                      <p>View</p>
                    </a>
                  </div>
                </SwiperSlide>
              </Swiper>
            </section>
            <Footer />
          </div>
        </>
    )
}