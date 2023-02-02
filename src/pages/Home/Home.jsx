
import { useEffect } from "react";

import { Header } from "../../components/Header"
import { MainPageContent } from "./MainPageContent"

export default function App() {
  useEffect(() => {
    document.title = "Hot Beans Web | Home"
  }, []);
  return (
    <>
      <Header />
      <MainPageContent />
    </>
  );
}
