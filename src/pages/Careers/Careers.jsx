
import { Header } from "../../components/Header"
import { Footer } from "../../components/footer"

import "./Careers.scss"

export default function App() {
    return (
        <>
        <Header></Header>
          <section className="career-select">
            <div className="box-container">
              <div className="career-box">
                <p>Front-end Developer</p>
              </div>
              <div className="career-box">
                <p>Front-end Developer</p>
              </div>
              <div className="career-box">
                <p>Front-end Developer</p>
              </div>
              <div className="career-box">
                <p>Front-end Developer</p>
              </div>
            </div>
          </section>
          <section className="career-contact">
          </section>
          <section>
            <Footer />
          </section>
        </>
    )
}