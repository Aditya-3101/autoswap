import React, { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: null,
  });
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitLogin = (e) => {
    e.preventDefault();
    if (loginData.email !== null) {
      setStatus(true);
    } else {
      alert("Please fill all fields!");
    }
  };

  const confirmModal = () => {
    setStatus(false);
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div>
      <div className="login-section ">
        <p className="preset-header extra-margin">Login</p>
        <div className="preset-inputs preset-short">
          <label>Email</label>
          <input
            value={loginData.email}
            placeholder="Enter yout email"
            type="email"
            name="email"
            onChange={changeHandler}
          />
        </div>
        <button
          className="booking-reserve signup-btn login-btn"
          onClick={submitLogin}
        >
          Login
        </button>
      </div>
      <div className={`confirm-page ${status === false ? "hide-confirm" : ""}`}>
        <div className="booking-confirm">
          <GiConfirmed className="confirm-icon" />
          <div>Thank you for choosing our service. Kindly check your mail.</div>
          <div className="booking-dismiss" onClick={confirmModal}>
            Dismiss
          </div>
        </div>
      </div>
    </div>
  );
};
