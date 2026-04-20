import React from "react";
import "./About.css";
import theme_patten from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_patten} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a recent graduate from the Department of Information and
              Communication Engineering at the Institute of Technology of
              Cambodia. I am writing to express my strong interest in joining
              your team and to inquire about available job opportunities.
            </p>
            <p>
              I have developed a strong foundation in front-end technologies,
              including HTML, CSS, JavaScript, and modern frameworks like
              React.js and Vue.js. I am also proficient in back-end
              development with Node.js and PHP/Laravel. I am passionate about
              building efficient, scalable, and user-friendly web applications,
              and I am eager to contribute my skills to real-world projects
              while continuing to learn and grow as a developer.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Vue JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Laravel + PHP</p>
              <hr style={{ width: "90%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
