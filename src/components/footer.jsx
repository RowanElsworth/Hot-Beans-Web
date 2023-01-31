
import { Link } from "react-router-dom";
import "./footer.scss";

export function Footer() {
  return (
    <section style={{scrollSnapAlign: "end"}}>
      <footer>
        <nav className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Portfolio</Link></li>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/">Recources</Link></li>
          </ul>
        </nav>
        <p>Designed and created by Rowan Elsworth</p>
      </footer>
    </section>
  )
}