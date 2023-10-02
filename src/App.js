import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import headerVideo from "./assets/header-video.mp4";
import { useState } from "react";

function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <div className="App">
      <section className="header">
        <nav className="menu-container">
          <div className="logo">
            <h2>SIMS</h2>
          </div>
          <div className="menu">
            <ul className="main-menu">
              <li className="active">
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/courses"}>Courses</Link>
              </li>
              <li>
                <Link to={"/courseLayout"}>Course Layout</Link>
              </li>
            </ul>
          </div>
          <div class="learning-center">
            {isUserLoggedIn ? (
              <Link to={"/learning-center/dashboard"} className="center-link">
                Learning Center
              </Link>
            ) : (
              <Link to={"/login"} className="center-link">
                Login
              </Link>
            )}
          </div>
        </nav>
        <div class="video-wrapper">
          <video muted={true} autoPlay={true} className="header-video">
            <source src={headerVideo} />
          </video>
        </div>
        <div class="video-overlay"></div>
      </section>
    </div>
  );
}

export default App;
