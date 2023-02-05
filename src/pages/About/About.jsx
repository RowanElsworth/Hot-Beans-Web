
import { useEffect } from "react"

// import { Link } from "react-router-dom"

import { Header } from "../../components/Header"
import { Footer } from "../../components/footer"
import "./About.scss"

import Ismael from "./Ismael.png"
import Sam from "./Sam no BG.png"
import bg3 from "./teamBackground3.webp"

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
          <div className="person">
            <div className="person-img-container">
              <img className="circle" src={bg3} alt=""  />
              <img className="person-img" src={Ismael} alt="Ismael hard at work." />
            </div>
            <p>Ismael</p>
            <p>Managing Director</p>
          </div>
          <div className="person">
            <div className="person-img-container">
              <img className="circle" src={bg3} alt=""  />
              <img className="person-img" src={Sam} alt="Sam smiling with his thumbs up." />
            </div>
            <p>Karen</p>
            <p>Graphic Lead</p>
          </div>
          <div className="person">
            <div className="person-img-container">
              <img className="circle" src={bg3} alt=""  />
              <img className="person-img" src={Sam} alt="Sam smiling with his thumbs up." />
            </div>
            <p>Sam</p>
            <p>Quality Control Intern</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}