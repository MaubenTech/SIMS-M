import React, { useState, useRef, useEffect } from "react";
import "../css/login.css";
import { Link, Navigate } from "react-router-dom";
import CarouselItem from "./CarouselItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}/;

export const Login = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [username, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [enableButton, setEnableButton] = useState(false);
  const [success, setSuccess] = useState(false);
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

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    const result = USER_REGEX.test(username);
    console.log(result);
    console.log(username);
    setValidUserName(result);
  }, [username]);

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
  }, [password]);

  useEffect(() => {
    setErrorMessage("");
  }, [username, password]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === carouselItems.length - 1)
        updateIndex(0);
      else
        updateIndex(activeIndex + 1);
    }, 3000);
    return () => {
      clearInterval(interval);
    }
  }, [activeIndex, carouselItems.length, updateIndex])

  const handleSubmit = (event) => {
    console.log("function start");
    event.preventDefault();
    // const userCheck = USER_REGEX.test(username);
    // const passwordCheck = PASSWORD_REGEX.test(password);
    // if (!userCheck || !passwordCheck) {
    //   console.log(username, password);
    //   setErrorMessage("Invalid Entry");
    //   return;
    // }
    if (username === "Noahvikoo" && password === "Vicecity1@") {
      setSuccess(true);
    } else {
      setErrorMessage("Invalid Details");
    }
  };

  return (
    <>
      {success ? (
        <Navigate to="/learning-center/dashboard" replace={true} />
      ) : (
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
                <div className="carousel-control" >
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
              <div className="error">
                <p
                  ref={errorRef}
                  className={errorMessage ? "errorMessage" : "offscreen"}
                  aria-live={"assertive"}
                >
                  {errorMessage}
                </p>
              </div>
              <form className="login" onSubmit={handleSubmit}>
                <div className="username-container">
                  <label htmlFor="username">
                    Username
                    <span className={validUserName ? "valid" : "hide"}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span
                      className={
                        validUserName || !username ? "hide" : "invalid"
                      }
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    id="username"
                    value={username}
                    ref={userRef}
                    autoComplete="off"
                    onChange={(event) => setUserName(event.target.value)}
                    required
                    aria-invalid={validUserName ? "false" : "true"}
                    aria-describedby="username-instructions"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
                  <p
                    id="username-instructions"
                    className={
                      userFocus && username && !validUserName
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 Characters.
                    <br />
                  </p>
                </div>
                <div className="password-container">
                  <label htmlFor="password">
                    Password
                    <span className={validPassword ? "valid" : "hide"}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span
                      className={
                        validPassword || !password ? "hide" : "invalid"
                      }
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    // value={password}
                    required
                    aria-invalid={validPassword ? "false" : "true"}
                    aria-describedby="password-instructions"
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                  />
                  <p
                    id="password-instructions"
                    className={
                      passwordFocus && !validPassword
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />8 to 24 Characters,
                    One UpperCase letter and at least one special character{" "}
                    <br />
                  </p>
                </div>
                <div className="role-container">
                  <select name="role" id="" placeholder="Role">
                    <option value="proprietor">Proprietor</option>
                    <option value="admin">Admin</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="parent">Parent</option>
                  </select>
                </div>
                <div className="forgot-password">
                  <Link className="forgotPW">Forgot your password?</Link>
                </div>
                <div className="sign-in">
                  {/* <button
              // className="signinButton"
              // disabled={!validName || !validPassword ? true : false}
              // className={disabled ? "enabledSignin" : "signinButton"}
              >
                Sign In
              </button> */}
                  {!validUserName || !validPassword ? (
                    <button className="disableSigninButton" disabled={true}>
                      Sign in
                    </button>
                  ) : (
                    <button
                      className="enabledSignIn"
                      onClick={() => console.log("clicked")}
                    >
                      Sign in
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
