
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import dino from '../../assets/testimonial-dino.webp'
import rock from '../../assets/rock.webp'
import pea from '../../assets/green-pea-thing.webp'

import './Section4.scss'

export function Section4() {
  return (
  <section className="s4">
    <Swiper
      className="mySwiper1"
      navigation={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination, Mousewheel]}
    >
      <SwiperSlide>
        <div className="slider-wrapper s4-slide-1">
          <div className="s4-box slider-img">
            <img src={dino} alt="" />
          </div>
          <div className="s4-box slider-txt">
            <p>Hot Beans Web were great at making my website but more importantly making my feelings heard ensuring that I was put first.</p>
            <p>Milly, Dino Games</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-wrapper s4-slide-2">
          <div className="s4-box slider-img">
            <img src={rock} alt="" />
          </div>
          <div className="s4-box slider-txt">
            <p>Constantly throughout the project I had constant communication from friendly and enthusiastic people who knew what they were talking about. Working with Hot Beans Web was a breeze.</p>
            <p>Fern, Rocky Games</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-wrapper s4-slide-3">
          <div className="s4-box slider-img">
            <img src={pea} alt="" />
          </div>
          <div className="s4-box slider-txt">
            <p>Even with the tight deadline that they had for my project, Hot Beans Web created a masterpiece and kept me assured throughout the project.</p>
            <p>Heidi, Angry Pea Studios</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
  );
} 