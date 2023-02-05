
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export function Header() {
  const [display, setDisplay] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDisplay(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return ( 
    <>
      <header className="color-change">
        {/* logo */}
        <Link to="/"><p>Hot Beans</p></Link>
        {/* burger button */}
        <div ref={menuRef} className="burger-menu">
          <button
            className="burger-menu-button"
            aria-label={display ? "Close menu" : "Open menu"}
            aria-expanded={display}
            tabIndex={0}
            onClick={() => setDisplay(!display)}
          >
            <div className="burger-btn">
              <div className={`burger-btn-line burger1 ${display ? 'open' : ''}`}></div>
              <div className={`burger-btn-line burger2 ${display ? 'open' : ''}`}></div>
              <div className={`burger-btn-line burger3 ${display ? 'open' : ''}`}></div>
            </div>
          </button>
        </div>
      </header>
      {/* burger menu */}
      <nav
        className={`burger-menu-nav ${display ? "show": ""}`}
        aria-hidden={!display}
      >
        <div className="pages-nav">
          <ul>
            <li><Link to="/" className={window.location.pathname === "/" ? "active-page" : ""}>Home</Link></li>
            <li><Link to="/About" className={window.location.pathname === "/About" ? "active-page" : ""}>About</Link></li>
            <li><Link to="/Careers" className={window.location.pathname === "/Careers" ? "active-page" : ""}>Careers</Link></li>
            <li><Link to="/Contact" className={window.location.pathname === "/Contact" ? "active-page" : ""}>Contact</Link></li>
            <li><Link to="/Recources" className={window.location.pathname === "/Recources" ? "active-page" : ""}>Recources</Link></li>
          </ul>
        </div>
        <div className="socials-nav">
          <ul>
            <li><a href="/" rel="noreferrer" target="_blank">Twitter</a></li>
            <li><a href="/" rel="noreferrer" target="_blank">LinkedIn</a></li>
            <li><a href="/" rel="noreferrer" target="_blank">Facebook</a></li>
            <li><a href="/" rel="noreferrer" target="_blank">Instagram</a></li>
          </ul>
        </div>
      </nav>
    </>    
  )
}