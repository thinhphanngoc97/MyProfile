import React, { Component } from "react";
import '../assets/css/Header.css';
import { NavHashLink as NavLink  } from 'react-router-hash-link';
import img from '../assets/images/3.jpg';
import ReactTypingEffect from 'react-typing-effect';

class Header extends Component {
    componentDidMount() {
        window.onscroll = () => {
            const nav = document.querySelector('#navbar');
            if(window.pageYOffset > 0) 
                nav.className = 'navbar navbar-expand-sm navbar-dark navbar-scrolling'; 
            else 
                nav.className = 'navbar navbar-expand-sm navbar-dark';

            const homeSection = document.querySelector('#home').getBoundingClientRect();
            const homeMenuItem = document.querySelector('#home-menu-item');
            if(homeSection.y <= 200 && homeSection.y > -homeSection.height + 200) 
                homeMenuItem.className ="nav-link activated";
            else 
                homeMenuItem.className = "nav-link";
            
            
            const aboutSection = document.querySelector('#about').getBoundingClientRect();
            const aboutMenuItem = document.querySelector('#about-menu-item');
            if(aboutSection.y <= 200 && aboutSection.y > -aboutSection.height + 200) 
                aboutMenuItem.className ="nav-link activated";
            else 
                aboutMenuItem.className = "nav-link";

            const skillsSection = document.querySelector('#skills').getBoundingClientRect();
            const skillsMenuItem = document.querySelector('#skills-menu-item');
            if(skillsSection.y <= 200 && skillsSection.y > -skillsSection.height + 200) 
                skillsMenuItem.className ="nav-link activated";
            else 
                skillsMenuItem.className = "nav-link";

            const projectsSection = document.querySelector('#projects').getBoundingClientRect();
            const projectsMenuItem = document.querySelector('#projects-menu-item');
            if(projectsSection.y <= 200 && projectsSection.y > -projectsSection.height + 200) 
                projectsMenuItem.className ="nav-link activated";
            else 
                projectsMenuItem.className = "nav-link";

            const experienceSection = document.querySelector('#experience').getBoundingClientRect();
            const experienceMenuItem = document.querySelector('#experience-menu-item');
            if(experienceSection.y <= 200 && experienceSection.y > -experienceSection.height + 200) 
                experienceMenuItem.className ="nav-link activated";
            else 
                experienceMenuItem.className = "nav-link";

            const contactSection = document.querySelector('#contact').getBoundingClientRect();
            const contactMenuItem = document.querySelector('#contact-menu-item');
            if(contactSection.y <= 200) 
                contactMenuItem.className ="nav-link activated";
            else 
                contactMenuItem.className = "nav-link";
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
                                            id="home-menu-item"
                                            className="nav-link activated" 
                                            smooth 
                                            to="/#home"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            id="about-menu-item" 
                                            className="nav-link" 
                                            smooth 
                                            to="/#about"
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            id="skills-menu-item"
                                            className="nav-link" 
                                            smooth 
                                            to="/#skills"
                                        >
                                            Skills
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            id="projects-menu-item"
                                            className="nav-link" 
                                            smooth 
                                            to="/#projects"
                                        >
                                            Projects
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            id="experience-menu-item"
                                            className="nav-link" 
                                            smooth 
                                            to="/#experience"
                                        >
                                            Experience
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink 
                                            id="contact-menu-item"
                                            className="nav-link" 
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
                                    <a 
                                        href="https://www.facebook.com/thinhphanngoc97" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://www.linkedin.com/in/thinh-phan-ngoc-013179194" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://github.com/thinhphanngoc97" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="move-down-button">
                        <NavLink 
                            className="nav-link" 
                            smooth 
                            to="/#about"
                        >
                            <span className="move-down-point"></span>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;