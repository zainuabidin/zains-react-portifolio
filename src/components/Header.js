import React from "react";
const Header = ({currentPage,setCurrentPage}) => {
  
  const handleCurrentPage = (e, currentPage) => {
    setCurrentPage(currentPage);
    e.preventDefault();
  };

  return (
    <header className="mb-30">
      <h3 className="float-md-start mb-0">Zain's  Portfolio</h3>
      <nav className="nav nav-masthead justify-content-center">
        <a
          className={`nav-link fw-bold py-1 px-0 ${
            "Home" === currentPage ? "active" : ""
          }`}
          href="/"
          onClick={(e) => handleCurrentPage(e, "Home")}
        >
          Home
        </a>
        <a
          className={`nav-link fw-bold py-1 px-0 ${
            "Portfolio" === currentPage ? "active" : ""
          }`}
          href="/portfolio"
          onClick={(e) => handleCurrentPage(e, "Portfolio")}
        >
          Portfolio
        </a>
        <a
          className={`nav-link fw-bold py-1 px-0 ${
            "Contact" === currentPage ? "active" : ""
          }`}
          href="/contact"
          onClick={(e) => handleCurrentPage(e, "Contact")}
        >
          Contact
        </a>
        <a
          className={`nav-link fw-bold py-1 px-0 ${
            "Cv" === currentPage ? "active" : ""
          }`}
          href="/"
          onClick={(e) => handleCurrentPage(e, "Cv")}
        >
          Cv
        </a>
      </nav>
    </header>
  );
};

export default Header;
