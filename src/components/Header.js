import React, { Component } from "react";
import '../assets/css/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
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
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Experience</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contact</a>
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