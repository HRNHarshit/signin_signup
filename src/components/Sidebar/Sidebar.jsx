import React from "react";
import "./Sidebar.css";
import { Logo } from "../../assests";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p className="welcome">WELCOME TO</p>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <p className="about">We help you track your organisations metrics as per the ESG Guidelines</p>
      <p className="in_touch">
        Sounds Interesting? <span>Get in touch!</span>
      </p>
    </div>
  );
};

export default Sidebar;
