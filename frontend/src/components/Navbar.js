import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            <img shape="circle" src="/images/logo.png" alt="Game Station logo"/>
            <div style={{ marginLeft: "10px" }}>
              <p className="nav-title1">Game Station</p>
            </div>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/games"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Games
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sell"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sell
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;