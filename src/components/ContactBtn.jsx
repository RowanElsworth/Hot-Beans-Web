
import { Link } from "react-router-dom";
import './ContactBtn.scss'

export default function ContactBtn() {
  return (
    <Link to="/Contact" className="contact-btn">Contact Us</Link>
  )
}