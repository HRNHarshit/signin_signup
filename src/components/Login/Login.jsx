import React from "react";
// CSS
import "./Login.css";
// Components
import Sidebar from "../Sidebar/Sidebar";
// Assets
import { Google, Twitter, World } from "../../assests";

const Login = () => {
  return (
    <div className="container">
      <Sidebar />

      <div className="form_container">
        <img src={World} alt="World" />

        <div className="form">
          <div className="heading">
            <span>Login</span>
            <p>Enter your registered Email ID to continue</p>
          </div>
          <div className="form_grp">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Your Email ID" id="email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form_grp">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button className="btn">
            <img src={Google} alt="Google" />
            Sign up with Google
          </button>
          <button className="btn">
            <img src={Twitter} alt="Twitter" />
            Sign up with Twitter
          </button>

          <p className="trouble">
            Having trouble logging in? <span> Contact Us</span>
          </p>
          <button type="submit" className="continue">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
