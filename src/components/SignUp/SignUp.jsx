import React from "react";
// CSS
import "./SignUp.css";
// Components
import Sidebar from "../Sidebar/Sidebar";
// assets
import { World } from "../../assests";

const Signup = () => {
  return (
    <div className="container signup_form">
      <Sidebar />

      <div className="form_container">
        <img src={World} alt="World" />

        <div className="form">
          <span>Sign Up</span>
          <div className="form_grp">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Your Email ID" id="email" />
          </div>

          <div className="form_grp">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" />
          </div>

          <div className="form_grp">
            <label htmlFor="conform">Confirm Password</label>
            <input type="password" placeholder="Password" id="conform" />
          </div>

          <button type="submit" className="submit">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
