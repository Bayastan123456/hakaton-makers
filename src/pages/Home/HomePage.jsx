import React from "react";
import "./home.css";
import insta from "./image/insta-icon.svg";
import facebook from "./image/facebool-icon.svg";
import tele from "./image/tele-icon.svg";
import img1 from "./image/image 1.png";
import img2 from "./image/image 2.png";
import img3 from "./image/image 3.png";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <header>
          <div className="left__block-header">
            <h2>Learn new knowledge with us </h2>
            <p>
              Start, switch, or advance your career with more than 5,800
              courses, Professional Certificates, and degrees from world-class
              universities and companies.
            </p>
            <button>Get started</button>
            <div className="icon__header">
              <p>Join us in</p>
              <img src={insta} alt="error" />
              <img src={facebook} alt="error" />
              <img src={tele} alt="error" />
            </div>
          </div>
          <div className="right__block-header">
            <img src={img1} alt="error" id="header__img1" />
            <img src={img2} alt="error" id="header__img2" />
            <img src={img3} alt="error" id="header__img3" />
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
            <div className="circle5"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81"
              height="88"
              viewBox="0 0 81 88"
              fill="none"
              className="half__circle"
            >
              <path
                d="M20.1566 85.4637C17.8135 87.8068 13.983 87.8258 11.924 85.2294C5.08273 76.6031 1.10999 65.987 0.66381 54.8839C0.136923 41.7725 4.56641 28.9434 13.0706 18.9501C21.5749 8.95679 33.5302 2.53215 46.5571 0.954884C57.5886 -0.38078 68.7034 1.84261 78.3131 7.21582C81.2053 8.83303 81.7994 12.6172 79.8612 15.305L77.1587 19.0528C75.2206 21.7406 71.4854 22.2955 68.5105 20.8358C62.3641 17.82 55.4357 16.6218 48.5549 17.4549C39.6749 18.5301 31.5253 22.9096 25.7283 29.7217C19.9312 36.5337 16.9118 45.2789 17.271 54.2165C17.5493 61.142 19.8403 67.7896 23.8005 73.3744C25.7173 76.0775 25.767 79.8533 23.4239 82.1965L20.1566 85.4637Z"
                fill="#1190CC"
              />
            </svg>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HomePage;
