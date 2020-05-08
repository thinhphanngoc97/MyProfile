import React, { Component } from "react";
import '../assets/css/About.css';
import aboutImg from '../assets/images/a1.jpg';

class About extends Component {
    render() {
        return (
            <div className="container">
                <div id="about">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <img className="about-image" src={aboutImg} alt="Still me"/>
                            <img className="stack-about-image about-image" src={aboutImg} alt=""/>
                        </div>
                        <div className="about-content col-lg-8 col-md-12 col-sm-12">
                            <h2>Front-end Developer</h2>
                            <p>I am <b>Thinh Phan Ngoc</b>. I am a simple, creative, enthusiastic and fun-loving person.</p>
                            <p>My objective is always constantly improving programming skills and understanding of technologies to become a professional front-end developer.</p>
                            <div className="row personal-info">
                                <div className="col-md-6 col-sm-12">
                                    <ul>
                                        <li>
                                            <span className="title">Name : </span>
                                            <span className="value">Thinh Phan Ngoc</span>
                                        </li>
                                        <li>
                                            <span className="title">Age : </span>
                                            <span className="value">24 Years</span>
                                        </li>
                                        <li>
                                            <span className="title">Address : </span>
                                            <span className="value">Go Vap District, Ho Chi Minh City</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <ul>
                                        <li>
                                            <span className="title">Phone : </span>
                                            <span className="value">(+84) 98 869 03 45</span>
                                        </li>
                                        <li>
                                            <span className="title">Email : </span>
                                            <span className="value">thinhphanngoc97@gmail.com</span>
                                        </li>
                                        <li>
                                            <span className="title">Hobby : </span>
                                            <span  className="value">Movie, Music, Travel</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a 
                                className="btn btn-download-cv" 
                                href="https://www.topcv.vn/xem-cv/0ff40b88b7c1a22667ffa3dcbf60942d" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;