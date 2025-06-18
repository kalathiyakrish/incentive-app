import React from "react";
import "./PasswordShow.css";
import { IoChevronBackOutline } from "react-icons/io5";

const PasswordShow = () => {
  const email = "kalathiya2007@gmail.com";
  const password = "Admin@123";

  const Back = () => {
    window.location.href = "/home";
  };

  return (
    <div className="PasswordShow">
      <div className="PasswordShow_Icon">
        <IoChevronBackOutline onClick={() => Back()} className="back_icon" />
        <h1>DONT FORGET IT AGAIN...!</h1>
      </div>
      <h2>
        <p>
          Email Id: <strong>{email}</strong>
        </p>
        <p>
          Password: <strong>{password}</strong>{" "}
        </p>
      </h2>
    </div>
  );
};

export default PasswordShow;
