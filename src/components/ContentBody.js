import React, { Component } from "react";
import About from "./About";
import '../assets/css/About.css'

class ContentBody extends Component {
    render() {
        return (
            <div>
                <About/>
                <div id="skills"></div>
                <div id="experience"></div>
                <div id="projects"></div>
                <div id="contact"></div>
            </div>
        )
    }
}

export default ContentBody;