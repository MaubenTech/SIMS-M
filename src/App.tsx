import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
// import headerVideo from "./assets/header-video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

function App() {
	const [theme, colorMode] = useMode();
	const [isUserLoggedIn, setUserLoggedIn] = useState(false);
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
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
							<div className="learning-center">
								{isUserLoggedIn ? (
									<Link
										to={"/learning-center/dashboard"}
										className="center-link"
									>
										Learning Center
									</Link>
								) : (
									<Link to={"/login"} className="center-link">
										Login
									</Link>
									// <a href="login" className="center-link">
									// 	Login
									// </a>
								)}
							</div>
						</nav>
						{/* <div class="video-wrapper">
          <video muted={true} autoPlay={true} className="header-video">
            <source src={headerVideo} />
          </video>
        </div>
        <div class="video-overlay"></div> */}
					</section>
					<section className="hero">
						<div className="hero-title">
							<div className="hero-title-container">
								<h1 className="hero-h1">Meeting Your Educational Needs</h1>
								<h3 className="hero-h3">Learn exponentially</h3>
							</div>
							<div className="direct-user-container">
								<Link to={""} className="explore-courses">
									Explore Courses
								</Link>
								<Link to={""} className="start-learning">
									Start Learning
									<FontAwesomeIcon icon={faRightLong} />
								</Link>
							</div>
						</div>
						<div className="hero-colors">
							<div className="first-color"></div>
							<div className="second-color"></div>
						</div>
						<img
							src={require("./assets/hero-img.png")}
							alt=""
							className="hero-img"
						/>
					</section>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
