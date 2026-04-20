import React, { useRef, useState, useEffect } from "react";
import { Link as AnchorLink } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const menuRef = useRef();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const openMenu = () => {
    menuRef.current.classList.add("open");
  };
  const closeMenu = () => {
    menuRef.current.classList.remove("open");
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close Menu"
          className="nav-mob-close"
        />
        <li className={menu === "home" ? "active" : ""}>
          <AnchorLink
            className="anchor-link"
            to="home"
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => { setMenu("home"); closeMenu(); }}>
            <p>Home</p>
          </AnchorLink>
        </li>
        <li className={menu === "about" ? "active" : ""}>
          <AnchorLink
            className="anchor-link"
            to="about"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => { setMenu("about"); closeMenu(); }}>
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li className={menu === "project" ? "active" : ""}>
          <AnchorLink
            className="anchor-link"
            to="project"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => { setMenu("project"); closeMenu(); }}>
            <p>Project</p>
          </AnchorLink>
        </li>
        <li className={menu === "work" ? "active" : ""}>
          <AnchorLink
            className="anchor-link"
            to="work"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => { setMenu("work"); closeMenu(); }}>
            <p>Portfolio</p>
          </AnchorLink>
        </li>
        <li className={menu === "contact" ? "active" : ""}>
          <AnchorLink
            className="anchor-link"
            to="contact"
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => { setMenu("contact"); closeMenu(); }}>
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-actions">
        <button 
          onClick={toggleTheme} 
          className="theme-toggle"
          title="Toggle Theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <div className="nav-connect">
          <AnchorLink
            className="anchor-link"
            to="contact"
            smooth={true}
            offset={-50}
            duration={500}>
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
