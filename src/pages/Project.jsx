import React from "react";
import Navbar from "../Components/Navbar";
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project 2.png"
import project3 from "../assets/project3.png"
const About = () => {
  return (
    <>
      <Navbar />
      <br />
      <div className="pro">
        <h2>Project</h2>
      </div>
      <div className="project">
        <div className="project-1">
          <img src={project1} className="img-project" alt="project-1" />
          <h1>
            Ai Based Automated Billing System using IoT & Smart billing System
          </h1>
          <h3>Project Overview :</h3>
          <ul>
            <li>
              A smart trolley equipped with RFID readers, barcode scanners, and
              cameras automates billing by detecting items and calculating bills
              in real-time. The system reduces queue time by automatically
              deducting the total from the customer's e-wallet, enhancing
              shopping efficiency
            </li>
          </ul>
          <h3>Key Features</h3>
          <ul>
            <li>
              Implemented RFID-based item scanning with a real-time display on
              an LCD
            </li>
            <li>
              Designed billing software to generate and store bills in a
              database.
            </li>
            <li>
              Enabled email functionality for sending bills to customers using
              Python's smtplib.
            </li>
            <li>Added options to save and print bills for user convenience</li>
          </ul>
        </div>
        <div className="project-2">
          <img src={project2} className="img-project2" alt="project-2" />
          <h1>Space X Clone Website</h1>
          <h3>Project Overview :</h3>
          <ul>
            <li>
              Developed a visually appealing and responsive clone of the SpaceX
              website, replicating its design and functionality to enhance web
              development skills.
            </li>
          </ul>
          <h3>Tech Stack</h3>
          <ul>
            <li>HTML, CSS, JAVASCRIPT</li>
          </ul>
          <h3>Key Features</h3>
          <ul>
            <li>
              Fully responsive design compatible with various devices and screen
              sizes.
            </li>
            <li>
              Navigation bar and dynamic sections for better user experience.
            </li>
            <li>Clean and organized code structure for scalability.</li>
          </ul>
        </div>
        <div className="project-3">
          <img src={project3} className="img-project2" alt="project-3" />
          <h1>Placement Management System</h1>
          <h3>Project Overview :</h3>
          <ul>
            <li>
              A web-based application designed to streamline placement processes
              for students and administrators. This platform enables students to
              view and manage placement-related activities effectively.
            </li>
          </ul>
          <h3>Tech Stack</h3>
          <ul>
            <li>HTML, CSS, JAVASCRIPT, MYSQL</li>
          </ul>
          <h3>Key Features</h3>
          <ul>
            <li>Interactive User Interface</li>
            <li>Placement Details Access</li>
            <li>Real-Time Functionality</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
