
import { useEffect } from "react";

import { Header } from "../../components/Header"
import { Footer } from "../../components/footer"

import "./Careers.scss"

export default function App() {
  useEffect(() => {
    document.title = "Hot Beans Web | Careers"
  }, []);
  return (
    <>
    <Header></Header>
      <section className="career-select">
        <div className="box-container">
          <div className="career-box">
            <p>Lead Front-end Developer</p>
            <p>Requirements</p>
            <ul>
              <li>5 years experience</li>
              <li>a</li>
              <li>a</li>
            </ul>
            <p className="apply">To Apply:</p>
            <a href="mailto:">AnEmail@email.com</a>
          </div>
          <div className="career-box">
            <p>Front-end Developer</p>
            <p>Requirements</p>
            <ul>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>
            <p className="apply">To Apply:</p>
            <a href="mailto:">AnEmail@email.com</a>
          </div>
          <div className="career-box">
            <p>Front-end Developer</p>
            <p>Requirements</p>
            <ul>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>
            <p className="apply">To Apply:</p>
            <a href="mailto:">AnEmail@email.com</a>
          </div>
          <div className="career-box">
            <p className="title">Front-end Developer</p>
            <p>Requirements</p>
            <ul>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>
            <p className="apply">To Apply:</p>
            <a href="mailto:">AnEmail@email.com</a>
          </div>
        </div>
      </section>
      <section className="career-contact">
        <div className="career-contact-wrapper">
          <p>For General Career Enquiries</p>
          <div className="contact-wrapper">
            <form action="">
              <div className="name-container">
                <label htmlFor="">Full Name</label>
                <input type="text" name="" id="" />
              </div>
              <div className="email-container">
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />
              </div>
              <div className="text-container">
                <label htmlFor="">Your message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="upload-container">
                <label htmlFor="">Upload CV</label>
                <input type="file" name="" id="" />
              </div>
              <div className="submit-container">
                <input type="submit" name="" id="" />
              </div>
            </form>
          </div>
        </div>
        <div className="contact-img">
          
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  )
}