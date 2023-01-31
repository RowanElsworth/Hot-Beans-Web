
import { Link } from 'react-router-dom';

// import Atropos component
import Atropos from 'atropos/react';
// import Atropos styles
import 'atropos/css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper';

import { Footer } from '../../components/footer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './MainPage.scss';

import ContactBtn from '../../components/ContactBtn'

import s2example from './s2-example.png';
import hotBeansGif from './hotBeans.gif';
import globey from './globey2.png';
import phone from './phone-outline.png';
import dino from './testimonial-dino.png'
import cloud from './cloud.svg';


export function MainPageContent() {
  return (
    <div className="snap-wrapper">
      {/* Hero */}
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

      {/* section 2 */}
      <section className="s2">
        <div className="s2-top-wrapper">
          <div className="s2-box">
            <img src={s2example} alt="Phone, tablet, and monitor example designs of our websites" className="s2-example-img" />
          </div>
          <div className="s2-box">
           <h1 className="s2-h1">Bespoke website design tailored for <span className="s2-span"s><u>YOU</u></span></h1>
          </div>
        </div>
        <ContactBtn></ContactBtn>
      </section>

      {/* section 3 */}
      <section className="s3">
        <div className="s3-top-wrapper">
          <h2>Just some features we offer you</h2>
          <Atropos className="s3-phone-atropos">
            <img src={phone} alt="" className="s3-phone"/>
          </Atropos>
        </div>
        <div className="info-wrapper">
          <div>
            <p>Unique designs</p>
            <p>Where everything is built from scratch, not from a template</p>
          </div>
          <div>
            <p>Flexible creation</p>
            <p>Around your needs to ensure we deliver the best product that suits you</p>
          </div>
          <div>
            <p>Brilliant SEO</p>
            <p>Ensures that your site is the one that is viewed, not your competitors</p>
          </div>
          <div>
            <p>Reponsive design</p>
            <p>Making your site look and feel great on all devices so all clients can be reached</p>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="s4">
        <Swiper
          className="mySwiper1"
          navigation={true}
          // try to make mousewheel work and take over the control of scrolling
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Mousewheel]}
        >
          <SwiperSlide>
            <div className="slider-wrapper">
              <div className="s4-box slider-img">
                <img src={dino} alt="" />
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

      {/* section 5 */}
      <section className="s5">
        <Swiper
          slidesPerView={3.2}
          spaceBetween={30}
          centeredSlides={true}
          modules={[]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <div className="article-1">
              <a href="https://www.hswsolutions.com/resources/why-a-mobile-friendly-website-is-important/" rel="noreferrer" target="_blank" className="link-container">
                <p>Why your website must be mobile-friendly</p>
                <Link>View</Link>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="article-2">
              <a href="https://www.redlineminds.com/search-engine-optimizaton/what-is-seo-how-to-do-seo-for-ecommerce/" rel="noreferrer" target="_blank" className="link-container">
                <p>What is SEO?</p>
                <Link>View</Link>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="article-3">
              <a href="https://www.digitaldoughnut.com/articles/2020/december-2020/why-unique-content-is-more-important-for-your-site" rel="noreferrer" target="_blank" className="link-container">
                <p>Does your website need to be unique?</p>
                <Link>View</Link>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="article-4">
              <a href="https://www.glasgowcreative.co.uk/why-colour-scheme-is-important-branding-business/" rel="noreferrer" target="_blank" className="link-container">
                <p>Benefits of a consistent colour scheme</p>
                <Link>View</Link>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="article-5">
              <a href="https://www.dreamhost.com/blog/website-benefits-for-small-business/" rel="noreferrer" target="_blank" className="link-container">
                <p>Why websites are good for small businesses</p>
                <Link>View</Link>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="article-6">
              <a href="https://www.microdinc.com/blog/improve-customer-satisfaction/" rel="noreferrer" target="_blank" className="link-container">
                <p>How websites boost customer satisfaction</p>
                <Link>View</Link>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="article-7">
              <a href="https://ballywiremedia.ie/2021/10/05/1580-2/" rel="noreferrer" target="_blank" className="link-container">
                <p>Benefits of websites over traditional media</p>
                <Link>View</Link>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* section 6 - convinced */}
        <section className="convinced">
          <img src={hotBeansGif} alt="" className='hot-beans-gif'/>
          <p>Convinced?</p>
          <ContactBtn></ContactBtn>
          <Link to="/about" className='about-btn'>More about us</Link>
          <div className="globey-sit">
            <img src={globey} alt="" className="globey" />
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}