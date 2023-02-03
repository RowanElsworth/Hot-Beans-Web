
import { Link } from "react-router-dom";
import "./footer.scss";

export function Footer() {
  return (
    <section style={{scrollSnapAlign: "end"}}>
      <footer>
        <nav className="nav-links">
          <ul>
          <li><Link to="/" className={window.location.pathname === "/" ? "active-page" : ""}>Home</Link></li>
            <li><Link to="/About" className={window.location.pathname === "/About" ? "active-page" : ""}>About</Link></li>
            <li><Link to="/Portfolio" className={window.location.pathname === "/Portfolio" ? "active-page" : ""}>Portfolio</Link></li>
            <li><Link to="/Careers" className={window.location.pathname === "/Careers" ? "active-page" : ""}>Careers</Link></li>
            <li><Link to="/Contact" className={window.location.pathname === "/Contact" ? "active-page" : ""}>Contact</Link></li>
            <li><Link to="/Recources" className={window.location.pathname === "/Recources" ? "active-page" : ""}>Recources</Link></li>
          </ul>
        </nav>
        <p>Designed and created by Rowan Elsworth</p>
      </footer>
    </section>
  )
}