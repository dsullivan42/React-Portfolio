import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <h1>Portfolio</h1>
        <h2>Here are some of my projects:</h2>
        <div className="project-card">
          <a href="https://ljpeach.github.io/Flight-Travel-Finder/">
            <img src="./project1.PNG" alt="Flight Travel Finder" />
          </a>
          <div className="project-info">
            <p>
              Our first group project, an application that uses API calls in
              the front end to look up the cheapest flights, given the dates,
              and the user's desired travel locations. The flights will then be
              displayed, showing from the cheapest to the most expensive
              flights.
            </p>
          </div>
        </div>
        <div className="project-card">
          <a href="https://spooky-ghost-09826-e1fe8c97ce3e.herokuapp.com/">
            <img src="./Project2.PNG" alt="Second Group Project" />
          </a>
          <div className="project-info">
            <p>
              Our second group project, where we created a website that allows
              users to create an account. From there, the user is able to
              search movies using the IMDb API, and rate movies, adding the
              movie onto their profile, along with their rating score.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;