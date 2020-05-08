import React, { Component } from "react";
import About from "./About";
import '../assets/css/About.css'
import Skills from "./Skills";

class ContentBody extends Component {
    render() {
        return (
            <div>
                <About/>
                <Skills/>
                <div id="experience"></div>
                <div id="projects"></div>
                <div id="contact"></div>
            </div>
        )
    }
}

export default ContentBody;