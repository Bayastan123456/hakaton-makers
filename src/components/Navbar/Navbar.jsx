import React, { useState } from "react";
import "./navbar.css";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <g clip-path="url(#clip0_2_4)">
                <path
                  d="M8.48813 0H35.5118C40.2143 0 44 3.78572 44 8.48813V35.5119C44 40.2143 40.2143 44 35.5118 44H8.48813C3.78572 44 0 40.2143 0 35.5119V8.48813C0 3.78572 3.78572 0 8.48813 0ZM21.9822 15.6792C19.6506 15.6792 17.4962 16.4208 15.7267 17.6714V8.88065C15.7267 7.6212 14.7058 6.6 13.446 6.6C12.1862 6.6 11.1654 7.6212 11.1654 8.88065V25.6796C11.143 25.964 11.1681 27.6114 11.2434 28.079C11.9927 33.3464 16.5086 37.4 21.9822 37.4C27.9806 37.4 32.8426 32.538 32.8426 26.5397C32.8426 20.5413 27.9806 15.6792 21.9822 15.6792ZM21.9822 32.7952C18.5273 32.7952 15.7267 29.9945 15.7267 26.5396C15.7267 23.0846 18.5273 20.284 21.9822 20.284C25.4372 20.284 28.2378 23.0846 28.2378 26.5396C28.2378 29.9945 25.4371 32.7952 21.9822 32.7952Z"
                  fill="#505BE9"
                />
              </g>
            </svg>
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
