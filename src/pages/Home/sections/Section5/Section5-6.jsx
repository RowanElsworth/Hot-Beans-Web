
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import ContactBtn from '../../../../components/ContactBtn'

// Import assets
import hotBeansGif from '../../assets/hotBeans.gif';
import globey from '../../assets/globey2.png';

import './Clouds.scss'
import './Section5-6.scss'

export function Section5() {
  return (
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
        spaceBetween={40}
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
          <a className="article-1" href="https://www.hswsolutions.com/resources/why-a-mobile-friendly-website-is-important/" rel="noreferrer" target="_blank">
            <div className="bottom-container">
              <p>Why your website must be mobile-friendly</p>
              <p className="view-more">View</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="article-2" href="https://www.redlineminds.com/search-engine-optimizaton/what-is-seo-how-to-do-seo-for-ecommerce/" rel="noreferrer" target="_blank">
            <div className="bottom-container">
              <p>What is SEO?</p>
              <p className="view-more">View</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="article-3" href="https://www.digitaldoughnut.com/articles/2020/december-2020/why-unique-content-is-more-important-for-your-site" rel="noreferrer" target="_blank">
            <div className="bottom-container">
              <p>Does your website need to be unique?</p>
              <p className="view-more">View</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="article-4" href="https://www.glasgowcreative.co.uk/why-colour-scheme-is-important-branding-business/" rel="noreferrer" target="_blank">
            <div className="bottom-container">
              <p>Benefits of a consistent colour scheme</p>
              <p className="view-more">View</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="article-5" href="https://www.dreamhost.com/blog/website-benefits-for-small-business/" rel="noreferrer" target="_blank">
            <div className="bottom-container">
              <p>Why websites are good for small businesses</p>
              <p className="view-more">View</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="article-6" href="https://www.microdinc.com/blog/improve-customer-satisfaction/" rel="noreferrer" target="_blank">
            <div className="bottom-container">
              <p>How websites boost customer satisfaction</p>
              <p className="view-more">View</p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="article-7" href="https://ballywiremedia.ie/2021/10/05/1580-2/" rel="noreferrer" target="_blank">
            <div className="bottom-container">
              <p>Benefits of websites over traditional media</p>
              <p className="view-more">View</p>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>

      {/* section 6 - convinced */}
      {/* might want to attach the gif and globey into one image/gif instead of fucking around with sizing */}
      <section className="convinced">
        <div className="globey">
          <img src={globey} alt="" />
        </div>
        <div className="content-wrapper">
          <img src={hotBeansGif} alt="" className='hot-beans-gif'/>
          <p className="convinced-text">Convinced?</p>
          <ContactBtn className="s6-contact"></ContactBtn>
        </div>
      </section>
    </section>
  );
}