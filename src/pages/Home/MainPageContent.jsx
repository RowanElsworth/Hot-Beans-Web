
import { useState, useEffect } from 'react';

import { FaPen, FaSearch, FaMobileAlt, FaCommentAlt } from 'react-icons/fa';

// Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper';

import { Footer } from '../../components/footer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './MainPageContent.scss';
import './Clouds.scss'

import ContactBtn from '../../components/ContactBtn'

import s2example from './s2-example.png';
import hotBeansGif from './hotBeans.gif';
import globey from './globey2.png';
import dino from './testimonial-dino.png'
import rock from './rock.png';
import pea from './green pea thing.png'
import seo from './SEO.png';
import responsive from './responsive.png'
import designs from './designs.png'
import flexible from './flexible.png'

export function MainPageContent() {
  // S3 Image changing
  const [index, setIndex] = useState(0);
  const [, setSelected] = useState(null);
  const images = [
    { id: "unique", src: designs, text: "Where everything is built from scratch, no templates" },
    { id: "flexible", src: flexible, text: "Around your needs to ensure we deliver the best product that suits you" },
    { id: "seo", src: seo, text: "Ensures that your site is the one that is viewed, not your competitors" },
    { id: "responsive", src: responsive, text: "Making your site look and feel great on all devices so all clients can be reached" }
  ];

  // Changes effect every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [index, images.length]);

  // Click handler
  const handleClick = index => {
    setIndex(index);
    setSelected(index);
  };

  return (
    <div className="snap-wrapper">
      {/* Hero */}
      <section className="hero">
        <div className="rocket-ship">
          <img src="" alt="" />
          <p>PROOF OF CONCEPT NOT FINISHED</p>
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
        <div className="s3-left-wrapper">
          <div className={index === 0 ? "s3-box s3-box-active" : "s3-box"} onClick={() => handleClick(0)}>
            <div className="s3-box-icon">
              <FaPen />
            </div>
            <div className="s3-box-text">
              <p>Unique designs</p>
              <p>Where everything is built from scratch, no templates</p>
            </div>
          </div>
          <div className={index === 1 ? "s3-box s3-box-active" : "s3-box"} onClick={() => handleClick(1)}>
            <div className="s3-box-icon">
              <FaCommentAlt />
            </div>
            <div className="s3-box-text">
              <p>Flexible creation</p>
              <p>Around your needs to ensure we deliver the best product that suits you</p>
            </div>
          </div>
          <div className={index === 2 ? "s3-box s3-box-active" : "s3-box"} onClick={() => handleClick(2)}>
            <div className="s3-box-icon">
              <FaSearch />
            </div>
            <div className="s3-box-text">
              <p>Brilliant SEO</p>
              <p>Ensures that your site is the one that is viewed, not your competitors</p>
            </div>
          </div>
          <div className={index === 3 ? "s3-box s3-box-active" : "s3-box"} onClick={() => handleClick(3)}>
            <div className="s3-box-icon">
              <FaMobileAlt />
            </div>
            <div className="s3-box-text">
              <p>Reponsive design</p>
              <p>Making your site look and feel great on all devices so all clients can be reached</p>
            </div>
          </div>
        </div>
        <div className="s3-right-wrapper">
          <div className="s3-right-img">
            <img src={images[index].src} alt="Slider" />
          </div>
          <div className="s3-right-text">
            <p>{images[index].text}</p>
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
                <p>Hot Beans Web were great at making my website but more importantly making my feelings heard ensuring that I was put first.</p>
                <p>Milly, Dino Games</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-wrapper">
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
            <div className="slider-wrapper">
              <div className="s4-box slider-img">
                <img src={pea} alt="" />
              </div>
              <div className="s4-box slider-txt">
                <p>Even with the tight deadline that they had for my project, Hot Beans Web created a masterpiece and kept me assured throughout the project.</p>
                <p>Person, Angry Pea Studios</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* section 5 */}
      <section className="clouds">
          <div class="initialCloud">
            <svg id="svgCloud" data-name="clouder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348 164"><defs><style></style></defs><path class="cloud1Fill" d="M348,107.5a54.5,54.5,0,0,1-94.87,36.61,77.55,77.55,0,0,1-81.57-1.43A73,73,0,0,1,71,145.07,42.48,42.48,0,1,1,49.61,71.59,73,73,0,0,1,154.85,26.84,77.51,77.51,0,0,1,287.16,53.37,53,53,0,0,1,293.5,53,54.5,54.5,0,0,1,348,107.5Z"/></svg>
          </div>
          <div class="firstCloud">
            <svg id="svgCloud" data-name="clouder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348 164"><defs><style></style></defs><path class="cloud1Fill" d="M348,107.5a54.5,54.5,0,0,1-94.87,36.61,77.55,77.55,0,0,1-81.57-1.43A73,73,0,0,1,71,145.07,42.48,42.48,0,1,1,49.61,71.59,73,73,0,0,1,154.85,26.84,77.51,77.51,0,0,1,287.16,53.37,53,53,0,0,1,293.5,53,54.5,54.5,0,0,1,348,107.5Z"/></svg>
          </div>
          <div class="secondCloud">
            <svg id="svgCloud" data-name="clouder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348 164"><defs><style></style></defs><path class="cloud1Fill" d="M348,107.5a54.5,54.5,0,0,1-94.87,36.61,77.55,77.55,0,0,1-81.57-1.43A73,73,0,0,1,71,145.07,42.48,42.48,0,1,1,49.61,71.59,73,73,0,0,1,154.85,26.84,77.51,77.51,0,0,1,287.16,53.37,53,53,0,0,1,293.5,53,54.5,54.5,0,0,1,348,107.5Z"/></svg>
          </div>
          <div class="thirdCloud">
            <svg id="svgCloud" data-name="clouder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348 164"><defs><style></style></defs><path class="cloud1Fill" d="M348,107.5a54.5,54.5,0,0,1-94.87,36.61,77.55,77.55,0,0,1-81.57-1.43A73,73,0,0,1,71,145.07,42.48,42.48,0,1,1,49.61,71.59,73,73,0,0,1,154.85,26.84,77.51,77.51,0,0,1,287.16,53.37,53,53,0,0,1,293.5,53,54.5,54.5,0,0,1,348,107.5Z"/></svg>
          </div>
          <div class="fourthCloud">
            <svg id="svgCloud" data-name="clouder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348 164"><defs><style></style></defs><path class="cloud1Fill" d="M348,107.5a54.5,54.5,0,0,1-94.87,36.61,77.55,77.55,0,0,1-81.57-1.43A73,73,0,0,1,71,145.07,42.48,42.48,0,1,1,49.61,71.59,73,73,0,0,1,154.85,26.84,77.51,77.51,0,0,1,287.16,53.37,53,53,0,0,1,293.5,53,54.5,54.5,0,0,1,348,107.5Z"/></svg>
          </div>
          <div class="fifthCloud">
            <svg id="svgCloud" data-name="clouder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348 164"><defs><style></style></defs><path class="cloud1Fill" d="M348,107.5a54.5,54.5,0,0,1-94.87,36.61,77.55,77.55,0,0,1-81.57-1.43A73,73,0,0,1,71,145.07,42.48,42.48,0,1,1,49.61,71.59,73,73,0,0,1,154.85,26.84,77.51,77.51,0,0,1,287.16,53.37,53,53,0,0,1,293.5,53,54.5,54.5,0,0,1,348,107.5Z"/></svg>
          </div>
        <Swiper
          navigation={true}
          slidesPerView={1.05}
          spaceBetween={30}
          centeredSlides={true}
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
          className="mySwiper2"
        >
          <SwiperSlide>
            <div className="article-1">
              <a href="https://www.hswsolutions.com/resources/why-a-mobile-friendly-website-is-important/" rel="noreferrer" target="_blank" className="link-container">
                <p>Why your website must be mobile-friendly</p>
                <p className="view-more">View</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="article-2">
              <a href="https://www.redlineminds.com/search-engine-optimizaton/what-is-seo-how-to-do-seo-for-ecommerce/" rel="noreferrer" target="_blank" className="link-container">
                <p>What is SEO?</p>
                <p className="view-more">View</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="article-3">
              <a href="https://www.digitaldoughnut.com/articles/2020/december-2020/why-unique-content-is-more-important-for-your-site" rel="noreferrer" target="_blank" className="link-container">
                <p>Does your website need to be unique?</p>
                <p className="view-more">View</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="article-4">
              <a href="https://www.glasgowcreative.co.uk/why-colour-scheme-is-important-branding-business/" rel="noreferrer" target="_blank" className="link-container">
                <p>Benefits of a consistent colour scheme</p>
                <p className="view-more">View</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="article-5">
              <a href="https://www.dreamhost.com/blog/website-benefits-for-small-business/" rel="noreferrer" target="_blank" className="link-container">
                <p>Why websites are good for small businesses</p>
                <p className="view-more">View</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="article-6">
              <a href="https://www.microdinc.com/blog/improve-customer-satisfaction/" rel="noreferrer" target="_blank" className="link-container">
                <p>How websites boost customer satisfaction</p>
                <p className="view-more">View</p>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="article-7">
              <a href="https://ballywiremedia.ie/2021/10/05/1580-2/" rel="noreferrer" target="_blank" className="link-container">
                <p>Benefits of websites over traditional media</p>
                <p className="view-more">View</p>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* section 6 - convinced */}
        {/* might want to attach the gif and globey into one image/gif instead of fucking around with sizing */}
        <section className="convinced">
          <div className="globey-wrapper">
            <img src={globey} alt="" className="globey" />
            <div className="content-wrapper">
              <img src={hotBeansGif} alt="" className='hot-beans-gif'/>
              <p className="convinced">Convinced?</p>
              <ContactBtn className="s6-contact"></ContactBtn>
            </div>
          </div>

        </section>
      </section>
      <Footer />
    </div>
  );
}