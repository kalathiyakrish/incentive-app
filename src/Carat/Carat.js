import React from "react";
import "./Carat.css";
import logo from "../Asset/npjlogo.png";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const Carat = () => {
  const Back = () => {
    window.location.href = "/second";
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    const name = document.getElementById("name").value;
    const salary = parseFloat(document.getElementById("salary").value);
    const gram = parseFloat(document.getElementById("gram").value);

    if (name && !isNaN(salary) && !isNaN(gram)) {
      navigate("/caratdetail", {
        state: { name, salary, gram },
      });
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  return (
    <div className="container_SecondPage">
      <img src={logo} alt="NPJ Logo" />
      <form>
        <div className="back_class">
          <IoChevronBackOutline onClick={() => Back()} className="back_icon" />
          <h1>CARAT INCENTIVE</h1>
        </div>
        <hr />
        <label>Enter Salesman Name:</label>
        <input
          type="text"
          placeholder="Enter Salesman Name"
          id="name"
          required
        />
        <hr />

        <label>Enter Salesman Salary:</label>
        <input
          type="text"
          placeholder="Enter Salesman Salary"
          id="salary"
          required
        />
        <hr />

        <label>Enter CARAT:</label>
        <input type="text" placeholder="Enter CARAT" id="gram" required />
        <hr />

        <div className="radio_buttons">
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Carat;
