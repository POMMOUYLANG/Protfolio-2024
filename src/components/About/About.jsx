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
              In my fourth year of computer science studies, I am a highly
              driven and aspiring web developer looking for an internship
              opportunity to utilize and further expand my abilities
            </p>
            <p>
              in HTML, CSS, JavaScript, PHP, Vue.js, React.js. Dedicated to
              making a difference in real-world projects as well as having
              hands-on experience in web development.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Vue JS</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Laravel + PHP</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>YEARS OF STUDY</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+</h1>
          <p>
            PROJECTS OF COMPLETED <br />
            <span>FROM INDIVIDUAL</span>
          </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>
            PROJECTS OF COMPLETED <br /> <span>FROM GROUP</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
