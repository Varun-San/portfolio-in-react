import React from "react";
import Navbar from "../Components/Navbar";
import image from "../assets/skills.jpg";

const Users = () => {
  return (
    <>
      <Navbar />
      <br />
      <div className="skill">
        <div className="skill-img">
          <img src={image} alt="skill-img" />
        </div>
        <div className="skill-content">
          <h2>Skills</h2>
          <p>
            Programming Languages: Java Web Development: HTML, CSS, JavaScript,
            Responsive Web Design Database Management: SQL, Query Optimization,
            Development Tools: PyCharm, Arduino, Figma, Additional Skills:
            Object-Oriented Programming (OOP), Js Api Integration, Team
            Collaboration, Problem-Solving
          </p>
        </div>
      </div>
    </>
  );
};

export default Users;
