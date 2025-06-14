import React from "react";
import "./ChoiceButton.css";
import logo from "../Asset/logo2.png";

const ChoiceButton = () => {
  const Gold = () => {
    window.location.href = "/back";
  };

  const Carat = () => {
    window.location.href = "/carat";
  };
  return (
    <div className="ChoiceButton">
      <div className="choice_logo">
        <img src={logo} alt="NPJ Logo" />
      </div>
      <div className="choice_form">
        <div className="form">
          <h1>INCENTIVE</h1>
          <div className="choice_button">
            <button
              onClick={() => {
                Gold();
              }}
            >
              GOLD INCENTIVE
            </button>
            <button
              onClick={() => {
                Carat();
              }}
            >
              CARAT INCENTIVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoiceButton;
