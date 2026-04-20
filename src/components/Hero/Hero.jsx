import React from "react";
import { Link as AnchorLink } from "react-scroll";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import resumeUrl from "../../assets/myresume/resume.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="profile_img">
        <img src={profile_img} alt="" />
      </div>
      <h1>
        <span>I'm POM MOUYLANG,</span> <br />
        Junior Web Developer
      </h1>
      <p>
        I am a graduate of the Department of Information and Communication
        Engineering at the Institute of Technology of Cambodia. I am writing to
        express my interest in joining your team and to inquire about available
        job opportunities.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {/* <AnchorLink
            className="anchor-link"
            to="contact"
            smooth={true}
            duration={500}>
            My Postfolio For Me
          </AnchorLink> */}
          <a href="" target="_blank" title="Portfolio">
            My Portfolio For Me
          </a>
        </div>
        <a href={resumeUrl} download="Pom_Mouylang_Resume.pdf" className="hero-resume" target="_blank" rel="noopener noreferrer">
          My resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
