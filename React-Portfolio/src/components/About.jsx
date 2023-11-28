import React from "react";

function About() {
  return (
    <div className="about-container">
      <div className="profilePicture">
        <img src="./public/me.jpg" alt="Daniel Sullivan" />
        </div>
        <div className="about-content">
        <h1>About Me</h1>
        <p>Hi, my name is Daniel Sullivan. I'm an aspiring worker in the computer science industry. I have experience coding using JavaScript, CSS, HTML, Python, and C##. In my free time,
        I enjoy listening to music, attending concerts, watching sports, and playing video games. I've grown up around computers and have been interested in them my entire life. I strive to continue improving my skills
        in coding and to learn new languages. I'm currently enrolled in the Northwestern Fullstack Bootcamp course, and I hope that I can use these skills to find a job in the computer science industry, and to continue
        honing my skills in coding.
        </p>
        </div>
    </div>
  );
}

export default About;
