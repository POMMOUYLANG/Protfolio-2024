import React, { useRef, useState } from "react";
import { Link as AnchorLink } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        {/* <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li> */}
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink
            className="anchor-link"
            to="home"
            smooth={true}
            duration={500}>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            to="about"
            smooth={true}
            duration={500}>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            to="project"
            smooth={true}
            duration={500}>
            <p onClick={() => setMenu("project")}>Project</p>
          </AnchorLink>
          {menu === "project" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            to="work"
            smooth={true}
            duration={500}>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            to="contact"
            smooth={true}
            duration={500}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>

          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink
          className="anchor-link"
          to="contact"
          smooth={true}
          duration={500}>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../../assets/logo.png";
// import underline from "../../assets/nav_underline.svg";

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");

//   return (
//     <div className="navbar">
//       <img src={logo} alt="" />
//       <ul className="nav-menu">
//         <li>
//           {" "}
//           <RouterLink className="anchor-link" to="#home">
//             <p onClick={() => setMenu("home")}>Home</p>
//           </RouterLink>
//           {menu === "home" ? <img src={underline} alt="" /> : <></>}
//         </li>
//         <li>
//           {" "}
//           <RouterLink className="anchor-link" to="#about">
//             <p onClick={() => setMenu("about")}>About Me</p>
//           </RouterLink>
//           {menu === "about" ? <img src={underline} alt="" /> : <></>}
//         </li>
//         <li>
//           {" "}
//           <RouterLink className="anchor-link" to="#project">
//             <p onClick={() => setMenu("project")}>Project</p>
//           </RouterLink>
//           {menu === "project" ? <img src={underline} alt="" /> : <></>}
//         </li>
//         <li>
//           {" "}
//           <RouterLink className="anchor-link" to="#work">
//             <p onClick={() => setMenu("work")}>Portfolio</p>
//           </RouterLink>
//           {menu === "work" ? <img src={underline} alt="" /> : <></>}
//         </li>
//         <li>
//           {" "}
//           <RouterLink className="anchor-link" to="#contact">
//             <p onClick={() => setMenu("contact")}>Contact</p>
//           </RouterLink>
//           {menu === "contact" ? <img src={underline} alt="" /> : <></>}
//         </li>
//       </ul>
//       <div className="nav-connect">
//         <RouterLink className="anchor-link" to="#contact">
//           Connect With Me
//         </RouterLink>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
