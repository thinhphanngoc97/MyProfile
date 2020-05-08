import React, { Component } from "react";
import '../assets/css/Skills.css';

class Skills extends Component {
    render() {
        return (
            <div id="skills">
                <div className="programming-skills">
                    <div className="container">
                        <h2 className="title">
                            My
                            <span> Programming Skills</span>    
                        </h2>
                    </div>
                </div>
                <div className="soft-skills">
                    <div className="container">
                    <h2 className="title">
                        My
                        <span> Soft Skills</span>    
                    </h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;