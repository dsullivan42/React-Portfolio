import React from "react";

function About() {
  return (
    <div className="about-container">
      <div className="profilePicture">
        <img src="./public/me.jpg" alt="Daniel Sullivan" />
        </div>
        <div className="about-content">
        <h1>About Me</h1>
        <p>I am Daniel Sullivan, a dedicated professional aspiring to contribute my skills to the dynamic field of computer science. Proficient in JavaScript, CSS, HTML, Python, and C##, I possess a comprehensive background in coding and a commitment to continuous improvement.

          My passion for technology was cultivated throughout my upbringing, surrounded by computers and fueled by a lifelong interest in their workings. Enrolled in the Northwestern Fullstack Bootcamp, I am actively refining my coding skills with the aim of securing a position in the computer science industry.
        </p>
        <p>In addition to my technical expertise, my experience in sports and team activities has instilled in me the values of teamwork, problem-solving, and achieving progress collectively. These principles seamlessly translate into my approach to coding, where I find immense satisfaction in tackling challenges and witnessing tangible progress.

My recent involvement in larger-scale team projects has reinforced my appreciation for collaborative coding environments. I thrive on the exchange of ideas, mutual learning, and the camaraderie that comes from working together towards a shared goal.
        </p>
        </div>
    </div>
  );
}

export default About;
