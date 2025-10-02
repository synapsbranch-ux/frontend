import React from "react";
import "./RotatingCube.css";
import logo from '../assets/logo.png'; 
const RotatingCube = () => {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="face front">
          <div className="face-content">
            <img src={logo} alt="SYNAPS Logo" className="logo-icon" />
            
          </div>
        </div>
        <div className="face back">
          <div className="face-content">
            <img src={logo} alt="SYNAPS Logo" className="logo-icon" />
            
          </div>
        </div>
        <div className="face right">
          <div className="face-content">
            <img src={logo} alt="SYNAPS Logo" className="logo-icon" />
            
          </div>
        </div>
        <div className="face left">
          <div className="face-content">
            <img src={logo} alt="SYNAPS Logo" className="logo-icon" />
            
          </div>
        </div>
        <div className="face top">
          <div className="face-content">
            <img src={logo} alt="SYNAPS Logo" className="logo-icon" />
            
          </div>
        </div>
        <div className="face bottom">
          <div className="face-content">
            <img src={logo} alt="SYNAPS Logo" className="logo-icon" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingCube;