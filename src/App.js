import React,{useState} from "react";
import "./components/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      {currentPage === "Home" ? (
        <Home />
      ) : currentPage === "Portfolio" ? (
        <Portfolio />
      ) : currentPage === "Contact" ? (
        <Contact />
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
}

export default App;
