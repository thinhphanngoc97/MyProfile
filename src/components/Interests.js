import React, { Component } from "react";
import '../assets/css/Interests.css';
import movieImg from '../assets/images/movie.jpg';
import musicImg from '../assets/images/music.jpg';
import travelImg from '../assets/images/travel.jpg';
import swimmingImg from '../assets/images/swimming.jpg';
import cookingImg from '../assets/images/cooking.jpg';
import fishingImg from '../assets/images/fishing.jpg';

class Interests extends Component {
    render() {
        return (
            <div id="hobby">       
                <div className="container">
                    <h2 className="title">
                        About
                        <span> Hobby?</span>    
                    </h2>
                    <div className="row hobby-list">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-0">
                            <div className="hobby-item">
                                <img src={movieImg} alt="Movie"/>
                                <div className="overlay">
                                    <div className="overlay-inner">
                                        <h4>Movie</h4>
                                    </div>
                                </div>
                                <div className="overlay-upper"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-0">
                            <div className="hobby-item">
                                <img src={musicImg} alt="Music"/>
                                <div className="overlay">
                                    <div className="overlay-inner">
                                        <h4>Music</h4>
                                    </div>
                                </div>
                                <div className="overlay-upper"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-0">
                            <div className="hobby-item">
                                <img src={travelImg} alt="Travel"/>
                                <div className="overlay">
                                    <div className="overlay-inner">
                                        <h4>Travel</h4>
                                    </div>
                                </div>
                                <div className="overlay-upper"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-0">
                            <div className="hobby-item">
                                <img src={swimmingImg} alt="Swimming"/>
                                <div className="overlay">
                                    <div className="overlay-inner">
                                        <h4>Swimming</h4>
                                    </div>
                                </div>
                                <div className="overlay-upper"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-0">
                            <div className="hobby-item">
                                <img src={cookingImg} alt="Cooking"/>
                                <div className="overlay">
                                    <div className="overlay-inner">
                                        <h4>Cooking</h4>
                                    </div>
                                </div>
                                <div className="overlay-upper"></div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-0">
                            <div className="hobby-item">
                                <img src={fishingImg} alt="Fishing"/>
                                <div className="overlay">
                                    <div className="overlay-inner">
                                        <h4>Go Fishing</h4>
                                    </div>
                                </div>
                                <div className="overlay-upper"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Interests;