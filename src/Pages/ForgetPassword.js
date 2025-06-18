import React, { useState } from "react";
import logo from "../Asset/npjlogo.png";
import "./ForgetPasswod.css";
import { IoChevronBackOutline } from "react-icons/io5";

const ForgetPassword = () => {
  const emailid = "kalathiya2007@gmail.com";

  const [email, setEmail] = useState("");

  const Go = () => {
    window.location.href = "/passwordshow";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == emailid) {
      Go();
    } else {
      alert("Incorrect Email.");
    }
  };

  const Back = () => {
    window.location.href = "/home";
  };

  return (
    <div className="forget_password">
      <img src={logo} alt="NPJ Logo" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="back_class">
          <IoChevronBackOutline onClick={() => Back()} className="back_icon" />
          <h1>Forget Password</h1>
        </div>
        <hr />

        <label>Enter Email_Id</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email_Id"
        />
        <hr />

        <div className="forget_button">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
