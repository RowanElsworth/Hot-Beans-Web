
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


import { Header } from "../../components/Header"
import { Footer } from "../../components/footer";

import "./Recources.scss"

export default function App() {
    return (
        <>
          <Header />
          <section className="resource-scroll">
            <Swiper
              className="mySwiper1"
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
            >
              <SwiperSlide>
                <div className="slider-wrapper">
                  <div className="s4-box slider-img">
                  </div>
                  <div className="s4-box slider-txt">
                    <p>Hot Beans Web were great at making my website and making my feelings heard.</p>
                    <p>Milly, Dino Games</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-wrapper">
                  <div className="s4-box slider-img"></div>
                  <div className="s4-box slider-txt">
                    <p>Hot Beans Web were great at making my website and making my feelings heard.</p>
                    <p>Some person, lol inc.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-wrapper">
                  <div className="s4-box slider-img"></div>
                  <div className="s4-box slider-txt">
                    <p>Hot Beans Web were great at making my website and making my feelings heard.</p>
                    <p>Some person, lol inc.</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
          <section className="newsletter">

          </section>
          <Footer />
        </>
    )
}