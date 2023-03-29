
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/footer"
import "./Contact.scss"

export default function App() {
  useEffect(() => {
    document.title = "Hot Beans Web | Contact"
  }, []);
  return (
    <>
      <Header></Header>
      <div className="snap-wrapper">
        <section className="contact-bg">
          <div className="container-left">
            <div>
              <p>Phone</p>
              <a href="tel:0115 9100 100">0115 9100 100</a>
            </div>
            <div>
              <p>Visit Us</p>
              <p>111 Canal St</p>
              <p>Nottingham</p>
              <p>NG1 1HB</p>
            </div>
            <div>
              <p>Email</p>
              <a href="mailto:">hello@hotbeans.com</a>
            </div>
          </div>
          <div className="container-right">
            <div className="cta">
              <p>Contacting or visiting us?</p>
            </div>
            <div className="container-map">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2403.952822753542!2d-1.145219399999995!3d52.949271908860986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c3a6911c0b6d%3A0x92f956e3f80652c9!2sNottingham%20College%20City%20Hub!5e0!3m2!1sen!2suk!4v1675044309206!5m2!1sen!2suk"
              width={600}
              height={450}
              allowfullscreen=""
              title='Where the office is located'
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
            <div className="social-links">
              <Link to="/">Twitter</Link>
              <Link to="/">LinkedIn</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Instagram</Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
