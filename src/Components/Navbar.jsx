import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h3>Varun V S</h3>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/skills">Skill</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
