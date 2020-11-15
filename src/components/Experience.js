import React, { Component } from "react";
import '../assets/css/Experience.css';

class Experience extends Component {
    render() {
        return (
            <div id="experience">       
                <div className="container">
                    <h2 className="title">
                        My
                        <span> Experience</span>    
                    </h2>
                    <div className="row experience-list">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="experience-item card">
                                <div className="card-body">
                                    <h4>Full-Stack Developer</h4>
                                    <h3>Nichietsu System Development</h3>
                                    <h5>Mar 2019 - May 2019</h5>
                                    <p>This is the company that I chose to complete my internship. Here I have been researching and learning new technologies such as Next.js and Express.js. Besides, I also directly joined in developing an insurance website.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="experience-item card">
                                <div className="card-body">
                                    <h4>Front-end Developer</h4>
                                    <h3>BeeSight Soft</h3>
                                    <h5>May 2020 - Present</h5>
                                    <p>I am working here as a front-end developer.Thanks to good mentors, I have learned a lot of new and varied technologies. Most especially, here I get my first experience developing an ecommerce website.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;