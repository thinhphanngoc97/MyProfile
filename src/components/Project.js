import React, { Component } from "react";
import '../assets/css/Project.css';
import avengersImg from '../assets/images/avengers.jpg';

class Project extends Component {
    render() {
        return (
            <div id="projects">
                <div className="container">
                    <h2 className="title">
                        My
                        <span> Projects</span>    
                    </h2>
                    <div className="row project-list">
                        <div className="project-item m-3 col-lg-3 col-md-5 col-sm-10 col-xs-12">
                            <a href="https://mrcorydoras.web.app/" target="_blank" rel="noopener noreferrer">
                                <img src={avengersImg} alt="Movie Review"/>
                                <div className="overlay">
                                    <div className="overlay-inner">
                                        <h4>Movie Review</h4>
                                        <p>React, Bootstrap</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;