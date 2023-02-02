
import { useEffect } from "react"

// import { Link } from "react-router-dom"

import { Header } from "../../components/Header"
import { Footer } from "../../components/footer"
import "./About.scss"

import Sam from "./Sam.png"

export default function App() {
  useEffect(() => {
    document.title = "Hot Beans Web | About"
  }, []);
  return (
    <>
      <Header />

      <section className="about-hero">
        <h1>Title</h1>
        <p>Subtitle</p>
      </section>

      <section className="about-information">
        <div className="info-container">
          <div className="info-img-container">
            <img src="" alt="" />
          </div>
          <div className="info-txt-container">
            <p>Founded in 2015, we are a website development company based in Nottingham. Our team consists of talented and experienced web developers who are dedicated to creating high-quality and visually appealing websites for our clients.</p>
          </div>
        </div>
        <div className="info-container">
          <div className="info-img-container">
            <img src="" alt="" />
          </div>
          <div className="info-txt-container">
            <p>We specialise in building websites for all businesses, startups or giants. Our goal is to provide our clients with a professional online presence that helps them stand out in their industry and attract new customers.</p>
          </div>
        </div>
        <div className="info-container">
          <div className="info-img-container">
            <img src="" alt="" />
          </div>
          <div className="info-txt-container">
            <p>Our team has a wide range of skills, including expertise in HTML, CSS, JavaScript, and various content management systems such as WordPress and Drupal. We are also proficient in responsive design, ensuring that our clients' websites are optimized for viewing on any device.</p>
          </div>
        </div>
      </section>

      <section className="about-vid">
        <video src=""></video>
      </section>

      <section className="meet-team">
        <h1>Meet the Team</h1>
        <div className="team-container">
          <div className="team-box">
            <div className="team-left">
              <div className="team-img">
                <img src="" alt="" />
              </div>
              <p>Andre</p>
              <p>Managing Director</p>
            </div>
            <div className="team-right">
              <p>With over a decade of experience in the industry, Andre possesses a wealth of knowledge and expertise in web development, project management, and team leadership. He is known by his team and clients for his creative vision, strong communication skills, and unwavering commitment to delivering top-notch results for clients.</p>
            </div>
          </div>
          <div className="team-box">
            <div className="team-left">
              <div className="team-img">
                <img src="" alt="Sam with a karen hair style" />
              </div>
              <p>Karen</p>
              <p>Graphic Lead</p>
            </div>
            <div className="team-right">
              <p>With a passion for design and a strong eye for detail, Karen has become a leader in the industry, known for creating visually stunning websites. With over five years of experience in graphic design, she brings a wealth of knowledge and expertise to the Hot Beans Web team. Karen's dedication to her craft is evident in the stunning graphics she produces, and her innovative approach to design has earned her a reputation as a true creative genius. Under Karen's guidance, Hot Beans Web continues to push the boundaries of what is possible in website design, delivering stunning and effective websites for clients.</p>
            </div>
          </div>
          <div className="team-box">
            <div className="team-left">
              <div className="team-img">
                <img src={Sam} alt="Our most loved tech intern Sam smiling with his thumbs up." />
              </div>
              <p>Sam</p>
              <p>Quality Control Intern</p>
            </div>
            <div className="team-right">
              <p>Sam started with us recently as a graduate from high school in Greece, and while he hasn't got up to speed just yet, we have every confidence in him to achieve the best with us. Doing quality control, Sam is the backbone of the company. He ensures that all our products go out working perfectly for your business and brings much joy to the workforce, never losing his constant smile.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}