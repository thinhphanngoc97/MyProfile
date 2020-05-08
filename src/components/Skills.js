import React, { Component } from "react";
import '../assets/css/Skills.css';
import html5Img from '../assets/images/html5.svg';
import css3Img from '../assets/images/css3.svg';
import bootstrapImg from '../assets/images/bootstrap.svg';
import reactImg from '../assets/images/react.svg';
import nextjsImg from '../assets/images/nextjs.svg';
import nodejsImg from '../assets/images/nodejs.svg';
import sqlserverImg from '../assets/images/sqlserver.svg';
import postgreImg from '../assets/images/postgresql.svg';
import mysqlImg from '../assets/images/mysql.svg';
import gitlabImg from '../assets/images/gitlab.svg';
import githubImg from '../assets/images/github.svg';
// import sourcetreeImg from '../assets/images/sourcetree.svg';

class Skills extends Component {
    render() {
        return (
            <div id="skills">
                <div className="programming-skills">
                    <div className="container">
                        <h2 className="title">
                            What
                            <span> I Use?</span>    
                        </h2>
                        <div className="tech-list">
                            <img className="tech-icon" src={html5Img} alt="HTML5"/>
                            <img className="tech-icon" src={css3Img} alt="CSS3"/>
                            <img className="tech-icon bootstrap-icon" src={bootstrapImg} alt="Bootstrap 4"/>
                            <img className="tech-icon" src={reactImg} alt="React"/>
                            <img className="tech-icon" src={nextjsImg} alt="Next.js"/>
                            <img className="tech-icon" src={nodejsImg} alt="Node.js"/>
                            <img className="tech-icon" src={sqlserverImg} alt="Microsoft SQL Server"/>
                            <img className="tech-icon" src={postgreImg} alt="PostgreSQL"/>
                            <img className="tech-icon" src={mysqlImg} alt="My SQL"/>
                            <img className="tech-icon" src={gitlabImg} alt="Gitlab"/>
                            <img className="tech-icon" src={githubImg} alt="Github"/>
                            {/* <img className="tech-icon" src={sourcetreeImg} alt="Sourcetree"/> */}
                        </div>
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