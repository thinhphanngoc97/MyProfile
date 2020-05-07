import React, { Component } from "react";
import '../assets/css/About.css';
import aboutImg from '../assets/images/a1.jpg';

class About extends Component {
    render() {
        return (
            <div className="container">
                <div id="about">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <img className="about-image" src={aboutImg} alt="Still me"/>
                            <img className="stack-about-image about-image" src={aboutImg} alt=""/>
                        </div>
                        <div className="about-content col-md-8 col-sm-12">
                            <h2>Front-end Developer</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;