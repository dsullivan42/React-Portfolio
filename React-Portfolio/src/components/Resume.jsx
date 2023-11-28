import React from "react";

function Resume() {
    return (
        <div>
            <div>
                <h1>Resume</h1>
                <p>Here is a link to my resume:</p>
                <a href="https://docs.google.com/document/d/14lIdtnQwsYJF7WagKy7vETQWPwFlY_486mxa58ZiuWU/">Resume</a>
            </div>
            <div>
                <h1>Front End Proficiencies</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                </ul>
                <h1>Back End Proficiencies</h1>
                <ul>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;