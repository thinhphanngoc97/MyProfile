import React, { Component } from "react";
import '../assets/css/Header.css';
import { NavHashLink as NavLink  } from 'react-router-hash-link';
import img from '../assets/images/3.jpg';
import ReactTypingEffect from 'react-typing-effect';

class Header extends Component {
    componentDidMount() {
        window.onscroll = () => {
            const nav = document.querySelector('#navbar');
            if(window.pageYOffset > 0) nav.className = 'navbar navbar-expand-sm navbar-dark navbar-scrolling'; 
            else nav.className = 'navbar navbar-expand-sm navbar-dark';
        };
    }

    render() {
        return (
            <div className="header-banner">
                <div className="header">
                    <nav id="navbar" className="navbar navbar-expand-sm navbar-dark">
                        <div className="container"> 
                            <button 
                                className="navbar-toggler d-lg-none" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#collapsibleNavId" 
                                aria-controls="collapsibleNavId"
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <NavLink 
                                            className="nav-link" 
                                            activeClassName="" 
                                            smooth 
                                            to="/#home"
                                            location={{pathname: document.location.pathname + document.location.hash}}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            className="nav-link" 
                                            activeClassName="" 
                                            smooth 
                                            to="/#about"
                                            location={{pathname: document.location.pathname + document.location.hash}}
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            className="nav-link" 
                                            activeClassName="" 
                                            smooth 
                                            to="/#skills"
                                        >
                                            Skills
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            className="nav-link" 
                                            activeClassName="" 
                                            smooth 
                                            to="/#projects"
                                        >
                                            Projects
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            className="nav-link" 
                                            activeClassName="" 
                                            smooth 
                                            to="/#experience"
                                        >
                                            Experience
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            className="nav-link" 
                                            activeClassName="" 
                                            smooth 
                                            to="/#contact"
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="banner" id="home">
                    <div className="banner-content">
                        <div className="img-area">
                            <img className="image" src={img} alt="It's me"/>
                        </div>
                        <h3>Hi. I'm Thinh</h3>
                        <ReactTypingEffect 
                            className="position" 
                            text="Front-end Developer" 
                            speed="100"
                            typingDelay="1000"
                            eraseDelay="2000"
                        />
                        <div className="social">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/thinhphanngoc97" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/thinh-phan-ngoc-013179194" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/thinhphanngoc97" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="move-down-button">
                            <NavLink 
                                className="nav-link" 
                                activeClassName="" 
                                smooth 
                                to="/#about"
                            >
                                <span className="move-down-point"></span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;