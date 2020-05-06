import React, { Component } from "react";
import '../assets/css/Header.css';
import { NavHashLink as NavLink  } from 'react-router-hash-link';

class Header extends Component {
    render() {
        return (
            <div className="header" id="home">
                <div className="container"> 
                    <nav className="navbar navbar-expand-sm navbar-dark">
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
                                        activeClassName="activated" 
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
                                        activeClassName="activated" 
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
                                        activeClassName="activated" 
                                        smooth 
                                        to="/#skills"
                                    >
                                        Skills
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        className="nav-link" 
                                        activeClassName="activated" 
                                        smooth 
                                        to="/#experience"
                                    >
                                        Experience
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        className="nav-link" 
                                        activeClassName="activated" 
                                        smooth 
                                        to="/#projects"
                                    >
                                        Projects
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        className="nav-link" 
                                        activeClassName="activated" 
                                        smooth 
                                        to="/#contact"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="header-content">
        
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;