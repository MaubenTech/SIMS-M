import React, { useState } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
import CarouselItem from "./CarouselItem";

export const Login = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      description: "Get Closer to your peers online like never before",
      img: require("../assets/library.jpeg"),
    },
    {
      description: "An App that makes studying, lectures more interesting",
      img: require("../assets/class2.jpeg"),
    },
    {
      description: "Giving you the best experience ever",
      img: require("../assets/class.jpeg"),
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= carouselItems.length) {
      newIndex = carouselItems.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="left-pane">
          <div
            className="left-pane-inner"
            style={{ transform: `translate(-${activeIndex * 100}%)` }}
          >
            {carouselItems.map((item) => {
              return <CarouselItem item={item} width={"100%"} />;
            })}
          </div>
          <div className="carousel-control">
            <button
              className="arrow-button back"
              onClick={() => updateIndex(activeIndex - 1)}
            >
              <span className="material-symbols-outlined">
                arrow_back_ios_new
              </span>
            </button>
            <div className="carousel-indicator">
              {carouselItems.map((item, index) => {
                return (
                  <button
                    className="indicators"
                    onClick={() => updateIndex(index)}
                  >
                    <span
                      className={`material-symbols-outlined ${
                        index === activeIndex ? "dot active" : "dot"
                      }`}
                    >
                      radio_button_checked
                    </span>
                  </button>
                );
              })}
            </div>
            <button
              className="arrow-button forward"
              onClick={() => updateIndex(activeIndex + 1)}
            >
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </button>
          </div>
          <div className="left-pane-overlay"></div>
        </div>
        <div className="right-pane">
          <h3>SIMS</h3>
          <div className="welcome">
            <h3>Welcome to SIMS</h3>
          </div>
          <form action="" className="login">
            <div className="username-container">
              <label htmlFor="username">Username</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="password-container">
              <label htmlFor="password">Password</label>
              <input type="text" placeholder="********" />
            </div>
            <div className="forgot-password">
              <Link className="forgotPW">Forgot your password?</Link>
            </div>
            <div className="sign-in">
              <button className="signinButton">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
