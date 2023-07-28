import React, { useState } from "react";
import "./navbar.css";
import logo from "./image/logo.svg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleSubcategories = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="navbar">
        <div className="nav__left-block">
          <div className="nav__logo">
            <img src={logo} alt="logo" />
            <div className="logo__title">
              <p>Bilim</p>
              <p>Tech</p>
            </div>
          </div>

          <ul className="categories" onClick={toggleSubcategories}>
            <li className="category">
              Curses{" "}
              <span className={`arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
              {isOpen && (
                <ul className="subcategories">
                  <li> category </li>
                  <li> category</li>
                  <li> category</li>
                </ul>
              )}
            </li>
          </ul>

          <div className="search__block">
            <input type="search" placeholder="search" />
          </div>
        </div>
        <div className="login__nav">
          <button className="nav__btn-login" onClick={() => navigate("login")}>
            Login
          </button>
          <button
            className="nav__btn-free"
            onClick={() => navigate("register")}
          >
            Join for free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
