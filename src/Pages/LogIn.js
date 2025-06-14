import React, { useState } from "react";
import "./LogIn.css";
import logo from "../Asset/npjlogo.png";

import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const LogInPage = () => {
  const emailid = "kalathiya2007@gmail.com";
  const pass = "Admin@123";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== emailid) {
      alert("Incorrect email or password.");
    }
    if (password !== pass) {
      alert("Incorrect email or password.");
    }

    if (email === emailid && password === pass) {
      window.location.href = "/choice";
    }
  };

  return (
    <div className="container_Login_page">
      <img src={logo} alt="NPJ Logo" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Enter Email_Id </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email_Id"
        />
        <hr />

        <label>Enter Password</label>

        <div className="password_eye">
          <input
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          {showPassword ? (
            <IoIosEyeOff
              onClick={() => setShowPassword(!showPassword)}
              className="open_eye"
            />
          ) : (
            <IoIosEye
              onClick={() => setShowPassword(!showPassword)}
              className="open_eye"
            />
          )}
        </div>

        <Link to={"/forgetpassword"}>Forgot Password?</Link>
        <hr />

        <div className="submit_buttons">
          <button type="submit">Log In</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default LogInPage;
