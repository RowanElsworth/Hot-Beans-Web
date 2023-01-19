
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Carousel.scss";

import background from './background.png';
import s2example from "./s2-example.png";
import phone from './phone-outline.svg';

// import required modules
import { Navigation, Mousewheel, Parallax, Pagination } from "swiper";

export function Carousel() {
  return (
    <>
      <Swiper
        speed={850}
        parallax={true}
        direction={"vertical"}
        mousewheel={true}
        // allowTouchMove={false} need a mobile fix
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Parallax, Pagination]}
        className="mySwiper swiper-v"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "backgroundImage":
              `url(${background})`,
          }}
          data-swiper-parallax="-20%"
        ></div>
        {/* this is an emample slide for me don't delete pls */}
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        {/* Hero */}
        <SwiperSlide>
          <section>
            <div className="device-space-phone">

            </div>
            <div className="device-space-monitor">

            </div>
            <div className="device-space-tablet">

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
            <div className="s3-top-wrapper" data-swiper-parallax="-700">
              <h2>Tailored to you Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
              <img src={phone} alt="" />
            </div>
            <div className="info-wrapper" data-swiper-parallax="-500">
              <div>
                <p>Reponsive design</p>
                <p>Making your site look great on all devices</p>
              </div>
              <div>
                <p>Reponsive design</p>
                <p>Making your site look great on all devices</p>
              </div>
              <div>
                <p>Reponsive design</p>
                <p>Making your site look great on all devices</p>
              </div>
              <div>
                <p>Reponsive design</p>
                <p>Making your site look great on all devices</p>
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
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
          </Swiper>
          {/* section 6 - convinced */}
          <section>
            <div className="hot-beans-gif">

            </div>
            <p>Convinced?</p>
            <Link className="contact-btn" to="/">Contact Us</Link>
            <div className="the-place-for-globey">

            </div>
          </section>
          
        </SwiperSlide>
        {/* footer */}
        <SwiperSlide>
            <p>just to test D:</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
