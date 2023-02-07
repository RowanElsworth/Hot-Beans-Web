
import { Link } from "react-router-dom";
import "./footer.scss";

export function Footer() {
  return (
    <section className="footer-wrapper">
      <footer>
        <nav className="nav-links">
          <ul>
            <li><Link to="/" className={window.location.pathname === "/" ? "active-page" : ""}>Home</Link></li>
            <li><Link to="/About" className={window.location.pathname === "/About" ? "active-page" : ""}>About</Link></li>
            <li><Link to="/Careers" className={window.location.pathname === "/Careers" ? "active-page" : ""}>Careers</Link></li>
            <li><Link to="/Contact" className={window.location.pathname === "/Contact" ? "active-page" : ""}>Contact</Link></li>
            <li><Link to="/Resources" className={window.location.pathname === "/Resources" ? "active-page" : ""}>Resources</Link></li>
          </ul>
        </nav>
        <p>Website designed and created by Rowan Elsworth</p>
        <p>Custom artwork by Milly-Fern Elsworth</p>
      </footer>
    </section>
  )
}