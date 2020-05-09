import React, { Component } from "react";
import About from "./About";
import '../assets/css/About.css'
import Skills from "./Skills";
import Project from "./Project";

class ContentBody extends Component {
    render() {
        return (
            <div>
                <About/>
                <Skills/>
                <Project/>
                <div id="experience"></div>
                <div id="contact"></div>
            </div>
        )
    }
}

export default ContentBody;