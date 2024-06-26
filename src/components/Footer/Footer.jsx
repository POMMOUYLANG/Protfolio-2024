import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            I am a web developer from, ITC with 4 years of Department of
            Information and Communication Engineering from Institute technology
            of cambodia.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          2024 POM MOUYLANG. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <a
            href="https://www.facebook.com/mouy.laing.662033pom"
            target="_blank"
            title="Facebook">
            <p>Facebook</p>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            title="Email"
            target="_blank">
            <p>Email</p>
          </a>
          <p>(+855) 69 310 609</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
