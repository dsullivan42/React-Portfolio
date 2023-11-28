import React, { Component } from "react";

class Portfolio extends Component {
    render()

    {
        return (
            <div>
                <h1>Portfolio</h1>
                <p>Here are some of my projects:</p>
                <ul>
                    <li>
                        <a href="https://ljpeach.github.io/Flight-Travel-Finder/">
                        <img src="./project1.PNG" alt="Flight Travel Finder" />
                        </a>
                        <p> Our first group project, an application that uses api calls in the front end, to look up the cheapest flights, given the dates, and the user's desired travel locations. The flights will then be displayed, showing from the cheapet, to the most expensive flights.</p>
                    </li>
                     <li>
                        <a href="https://spooky-ghost-09826-e1fe8c97ce3e.herokuapp.com/">
                        <img src="./Project2.PNG" alt="Second Group Project" />
                        </a>
                        <p>Our second group project, where we created a website that allows users to create an account. From there, the user is able to search movies, using the imdb api, and rate movies, adding the movie onto their profile, along with their rating score.</p>
                </li>
                </ul>
            </div>
        );
    }
}

export default Portfolio;