
import { useEffect } from "react";
import { Header } from "../../components/Header"

import "./Portfolio.scss"


export default function App() {
  useEffect(() => {
    document.title = "Hot Beans Web | Portfolio"
  }, []);

    return (
        <>
          <Header />
          <p>Hello Careers section!</p>
          <button id="add-btn"></button>
          <div id="add-text">

          </div>
        </>
    )
}