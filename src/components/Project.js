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
                        <div className="p-1 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="project-item">
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
            </div>
        )
    }
}

export default Project;