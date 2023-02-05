
import { Link } from "react-router-dom";
import { useEffect } from "react";


import { Header } from "../../components/Header"
import { Footer } from "../../components/footer"

import "./Careers.scss"

import office from "./office-space.jpg";

export default function App() {
  useEffect(() => {
    document.title = "Hot Beans Web | Careers"
  }, []);

  return (
    <>
    <Header></Header>
      <section className="career-select">
        <div className="box-container">
          <Link to="/" className="career-box">
            <div className="top-txt-container">
              <p className="position-title">Lead Front End Developer</p>
              <p className="position-desc">Do you have the top-notch skills and the ability to required manage a team?</p>
            </div>
            <p className="position-view">View Position</p>
          </Link>
          <Link to="/" className="career-box">
            <div className="top-txt-container">
              <p className="position-title">Back End Developer</p>
              <p className="position-desc">Take your back end development skills to the next level.</p>
            </div>
            <p className="position-view">View Position</p>
          </Link>
          <Link to="/" className="career-box">
            <div className="top-txt-container">
              <p className="position-title">Front End Developer</p>
              <p className="position-desc">Are you wanting to be a part of our creative team?</p>
            </div>
            <p className="position-view">View Position</p>
          </Link>
          <Link to="/" className="career-box">
            <div className="top-txt-container">
              <p className="position-title">Graphic Designer</p>
              <p className="position-desc">Unleash your creative potential.</p>
            </div>
            <p className="position-view">View Position</p>
          </Link>
        </div>
      </section>
      <section className="career-contact">
      <div className="career-contact-wrapper">
        <p>For General Career Enquiries</p>
        <div className="contact-wrapper">
          <form
            action="https://formspree.io/f/mwkjvjay"
            method="POST"
            enctype="multipart/form-data"
          >
            <div className="name-container">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="email-container">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="text-container">
              <label htmlFor="">Your message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              />
            </div>
            <div className="submit-container">
              <input type="submit" value="Submit" className="submit-form" />
            </div>
          </form>
        </div>
      </div>
      <div className="contact-img-container">
        <div className="contact-img">
          <img src={office} alt="Our office" />
        </div>
      </div>
    </section>
      <section>
        <Footer />
      </section>
    </>
  )
}