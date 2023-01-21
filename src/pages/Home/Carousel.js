
import { Link } from "react-router-dom";

// import Atropos component
import Atropos from 'atropos/react';
// import Atropos styles
import 'atropos/css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./carousel.scss";

import background from './background.png';
import s2example from "./s2-example.png";
import hotBeansGif from './hotBeans.gif';
import globey from './globey.png';
import phone from './phone-outline.png';

// import required modules
import { Mousewheel, Parallax, Pagination } from "swiper";

export function Carousel() {
  return (
    <>
      <Swiper
        speed={850}
        parallax={true}
        direction={"vertical"}
        mousewheel={true}
        allowTouchMove={false} need a mobile fix
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Parallax, Pagination]}
        className="mySwiper1 swiper-v"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "backgroundImage":
              `url(${background})`,
          }}
          data-swiper-parallax="-25%"
        ></div>
        {/* Hero */}
        <SwiperSlide>
          <section className="hero">
            <div className="device-wrapper">
              <div className="device-space-phone">

              </div>
              <div className="device-space-monitor">

              </div>
              <div className="device-space-tablet">

              </div>
            </div>
            
            <div className="launch-station">

            </div>
          </section>
        </SwiperSlide>
        {/* section 2 */}
        <SwiperSlide>
          <section className="s2-bg">
            {/* make an animation for this wrapper that makes the elements slide in from left and right in to the center */}
            <div className="s2-top-wrapper" data-swiper-parallax="-700">
              <img src={s2example} alt="Phone tablet and monitor design of our websites" className="s2-example-img" />
              <h1 className="s2-h1">Bespoke website design tailored <br></br>for <span className="s2-span"s><u>YOU</u></span></h1>
            </div>
            <Link className="contact-btn s2-btn" to="/" data-swiper-parallax="-500">Contact Us</Link>
          </section>
        </SwiperSlide>
        {/* section 3 */}
        <SwiperSlide>
          <section className="s3-bg">
            <div className="s3-top-wrapper" data-swiper-parallax="-900">
              <h2>Just some features we offer you</h2>
              <Atropos className="s3-phone-atropos">
                <img src={phone} alt="" className="s3-phone"/>
              </Atropos>
            </div>
            <div className="info-wrapper">
              <div data-swiper-parallax="-300">
                <p>Unique designs</p>
                <p>Where everything is built from scratch, not from a template</p>
              </div>
              <div data-swiper-parallax="-400">
                <p>Flexible creation</p>
                <p>Around your needs to ensure we deliver the best product that suits you</p>
              </div>
              <div data-swiper-parallax="-500">
                <p>Brilliant SEO</p>
                <p>Ensures that your site is the one that is viewed, not your competitors</p>
              </div>
              <div data-swiper-parallax="-600">
                <p>Reponsive design</p>
                <p>Making your site look and feel great on all devices so all clients can be reached</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        {/* section 4 */}
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-h"
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="slider-wrapper">
                <div className="slider-img"></div>
                <div className="slider-txt">
                  <p>Hot Beans Web were great at making my website and making my feelings heard.</p>
                  <p>Some person, lol inc.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-wrapper">
                <div className="slider-img"></div>
                <div className="slider-txt">
                  <p></p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-wrapper">
                <div className="slider-img"></div>
                <div className="slider-txt">
                  <p></p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          </SwiperSlide>
        {/* section 5 */}
        <SwiperSlide>
          <Swiper
            slidesPerView={3.2}
            spaceBetween={30}
            centeredSlides={true}
            modules={[]}
            className="mySwiper3"
          >
            <SwiperSlide>Why your website must have mobile functionality</SwiperSlide>
            <SwiperSlide>What is SEO?</SwiperSlide>
            <SwiperSlide>Does your website need to be unique?</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
          </Swiper>
          {/* section 6 - convinced */}
          <section className="convinced">
            <img src={hotBeansGif} alt=""/>
            <p>Convinced?</p>
            <Link className="contact-btn" to="/">Contact Us</Link>
            <Link>More about us</Link>
            <img src={globey} alt=""/>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}