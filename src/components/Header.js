
import { Link } from "react-router-dom";
import "./header.scss"

export function Header() {
  return ( 
    <header>
        <Link to="/"><p className="text-blend">Hot Beans</p></Link>
        <button className="burger-btn">
          <div></div>
          <div></div>
          <div></div>
        </button>
    </header>
  )
}