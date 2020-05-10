import React, { Component } from "react";
import About from "./About";
import '../assets/css/About.css'
import Skills from "./Skills";
import Project from "./Project";
import Experience from "./Experience";
import Contact from "./Contact";

class ContentBody extends Component {
    render() {
        return (
            <div>
                <About/>
                <Skills/>
                <Project/>
                <Experience/>
                <Contact/>
            </div>
        )
    }
}

export default ContentBody;