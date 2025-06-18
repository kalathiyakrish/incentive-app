import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SecondPage from "./Pages/SecondPage";
import LogInPage from "./Pages/LogIn";
import ForgetPassword from "./Pages/ForgetPassword";
import Details from "./Pages/Details";
import "./App.css";
import ChoiceButton from "./Carat/ChoiceButton";
import Carat from "./Carat/Carat";
import CaratDetail from "./Carat/CaratDetail";

function App() {
  return (
    <div className="app_main">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<LogInPage />} />
          <Route path="/secondpage" element={<SecondPage />} />
          <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
          <Route path="/second" element={<ChoiceButton />} />
          <Route path="/salary-main" element={<Details />} />
          <Route path="/back" element={<SecondPage />} />
          <Route path="/choice" element={<ChoiceButton />} />
          <Route path="/carat" element={<Carat />} />
          <Route path="/caratdetail" element={<CaratDetail />} />
  <Route path="/passwordshow" element={<PasswordShow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
