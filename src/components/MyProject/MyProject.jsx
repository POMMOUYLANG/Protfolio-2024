import React from "react";
import "./MyProject.css";
import theme_patten from "../../assets/theme_pattern.svg";
import MyProjects_Data from "../../assets/myprojects_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyProject = () => {
  return (
    <div id="project" className="myprojects">
      <div className="myprojects-title">
        <h1>My Projects</h1>
        <img src={theme_patten} alt="" />
      </div>
      <div className="myprojects-container">
        {MyProjects_Data.map((myproject, index) => {
          return (
            <div key={index} className="myproject-format">
              <h3>{myproject.p_no}</h3>
              <h2>{myproject.p_name}</h2>
              <p>{myproject.p_desc}</p>
              <div className="myproject-readmore">
                {/* <p>Read More</p> */}
                <a
                  href={myproject.p_url}
                  target="_blank"
                  rel="noopener noreferrer">
                  Read More
                </a>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProject;
