import React from "react";
import "./Main.css";
import hero from "./Assets/images/hero.svg";
const Main = () => {
  return (
    <div className="main">
      <div className="content1">
        <p className="talents">
          Find the right <span className="talent">talents</span> to fuel your
          business growth
        </p>
        <p className="vibrant">
          Join a vibrant community of MSPs to forge long-lasting relationships
          with partners that help you create excellent customer experiences
        </p>
      </div>
      <div>
        <img className="hero" src={hero} />
      </div>
    </div>
  );
};

export default Main;
