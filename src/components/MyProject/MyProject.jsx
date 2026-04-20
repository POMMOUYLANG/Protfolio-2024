import React, { useState } from "react";
import "./MyProject.css";
import theme_patten from "../../assets/theme_pattern.svg";
import MyProjects_Data from "../../assets/myprojects_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyProject = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = MyProjects_Data.filter((project) => {
    if (filter === "All") return true;
    return project.p_category === filter;
  });

  return (
    <div id="project" className="myprojects">
      <div className="myprojects-title">
        <h1>My Projects</h1>
        <img src={theme_patten} alt="" />
      </div>

      <div className="myprojects-filter">
        <button 
          className={filter === "All" ? "active" : ""} 
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button 
          className={filter === "Job" ? "active" : ""} 
          onClick={() => setFilter("Job")}
        >
          Job
        </button>
        <button 
          className={filter === "Study" ? "active" : ""} 
          onClick={() => setFilter("Study")}
        >
          Study
        </button>
      </div>

      <div className="myprojects-container">
        {filteredProjects.map((myproject, index) => {
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
                  {/* <p>Read More</p> */}
                  <p>GitHub More</p>
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
