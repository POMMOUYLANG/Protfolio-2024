import React from "react";
import { Link as AnchorLink } from "react-scroll";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="profile_img">
        <img src={profile_img} alt="" />
      </div>
      <h1>
        <span>I'm POM MOUYLANG,</span> <br />
        WEB Developer.
      </h1>
      <p>
        I'm a student of Department of Information and Communication Engineering
        from Institute technology of cambodia.I would like to ask you about
        internship.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink
            className="anchor-link"
            to="contact"
            smooth={true}
            duration={500}>
            My Postfolio For Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
