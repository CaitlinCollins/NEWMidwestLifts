import React from "react";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="content">

        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="7000">
                <div className="words-overlay">
                <Link to="/lifts" className="words-overlay">LIFTS</Link>
                </div>
                <img src="/assets/FlooringPic9.jpg" alt="lift" className="d-block w-100 hero"></img>
                <div id="overlay" width="80px" height="80px">
                    <img src="/assets/logo.png" alt="logo" id="logo"></img>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="7000">
                  <div className="words-overlay">
                      <Link to="/lighting" className="words-overlay">LIGHTING</Link>
                  </div>
                <img src="/assets/LightingPic3.jpg"  alt="lights" className="d-block w-100 hero"></img>
                <div id="overlay" width="80px" height="80px">
                    <img src="/assets/logo.png" alt="logo" id="logo"></img>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="7000">
                <div className="words-overlay">
                <Link to="/flooring" className="words-overlay">FLOORING</Link>
                </div>
                <img src="/assets/FlooringPic6.jpg" alt="flooring" className="d-block w-100 hero"></img>
                <div id="overlay" width="80px" height="80px">
                    <img src="/assets/logo.png" alt="logo" id="logo"></img>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </div>
    )

}

export default Home;