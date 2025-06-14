import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../Asset/npjlogo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 2200);

    const navTimer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <div className="container_Home">
      <img src={logo} alt="NPJ Logo" className={fade ? "fade-out" : ""} />
    </div>
  );
};

export default Home;
