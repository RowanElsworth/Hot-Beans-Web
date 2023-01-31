
import { useState } from "react";
import { Link } from "react-router-dom";

import BurgerBtn from "./BurgerBtn"
import "./Header.module.scss"

export function Header() {
  
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () =>{
      setBurgerOpen(!burgerOpen)
  }

  return ( 
    <>
      <div className="burger-menu">
        <div className="pages-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Portfolio">Portfolio</Link></li>
            <li><Link to="/Careers">Careers</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Recources">Recources</Link></li>
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
      </div>
      <header>
        <Link to="/"><p className="text-blend">Hot Beans</p></Link>
        <div onClick={toggleBurger}>
          <BurgerBtn isOpen={burgerOpen} />
        </div>
      </header>

      <style jsx>{`
      a {
        text-decoration: none;
      }
      .burger-menu {
        background-color: #1C1F2F;
        position: fixed;
        width: ${burgerOpen ? '400px' : 0};
        max-height: ${burgerOpen ? '60vh' : 0};
        padding: ${burgerOpen ? '50px 25px' : 0};
        top: 5px;
        right: 65px;
        z-index: 3;
        border-radius: 25px;
        opacity: ${burgerOpen ? 1 : 0};
        transition: all 0.6s ease-in-out;
      }
      .pages-nav ul li a {
        font-size: ${burgerOpen ? '3.2rem' : 0};
        color: white;
        transition: 0.4s;
        overflow: hidden;
        position: relative;
      }
      .pages-nav ul li a::before {
        content: '→';
        position: absolute;
        opacity: 0;
        left: -60px;
        transition: 0.4s;
      }
      .pages-nav ul li a:hover {
        padding-left: 40px;
      }
      .pages-nav ul li a:hover::before {
        opacity: 1;
        left: 0px;
      }
      .socials-nav ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
      .socials-nav ul li {
        min-width: 50%;
      }
      .socials-nav ul a {
        font-size: ${burgerOpen ? '2.4rem' : 0};
        color: white;
      }
      .socials-nav ul a::after {
        content: "";
        display: block;
        height: 2.5px;
        width: 0;
        background-color: #fff;
        transition: 0.2s width linear;
        margin: 0 auto;
        border-radius: 50px;
      }
      .socials-nav ul a:hover::after {
        width: 100%;
      }
      `}</style>
    </>    
  )
}