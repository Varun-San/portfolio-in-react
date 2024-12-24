import React from "react";
import Navbar from "../Components/Navbar";
import profile from "../assets/profile2.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <br />
      <div className="home">
        <div className="home-content">
          <h1>Web Developer</h1>
          <p>
            I am Varun V, a passionate Software developer working to build
            impactful solutions through technology. I am deeply experienced in
            Java, HTML, CSS, JavaScript, SQL, and Figma Design, and I am keen on
            innovating and contributing to the success of organizations. My
            projects reflect a commitment to continuous learning and practical
            problem-solving.
          </p>
        </div>
        <div className="home-img">
          <img src={profile} alt="profile pic" />
        </div>
      </div>
    </>
  );
};

export default Home;
