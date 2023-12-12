import React, { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [formData, setFormData] = useState({
    firstName: null,
    lastName: null,
    phone: null,
    userMail: null,
    city: null,
  });
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (
      formData.firstName !== null &&
      formData.lastName !== null &&
      formData.phone !== null &&
      formData.userMail !== null &&
      formData.city !== null
    ) {
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
      <div className="signin-form">
        <p className="preset-header extra-margin">Sign In</p>
        <div className="preset-inputs preset-short">
          <label>First Name</label>
          <input
            value={formData.firstName}
            type="text"
            name="firstName"
            onChange={changeHandler}
            placeholder="Enter your first name"
          />
        </div>
        <div className="preset-inputs preset-short">
          <label>Last Name</label>
          <input
            value={formData.lastName}
            type="text"
            name="lastName"
            onChange={changeHandler}
            placeholder="Enter your last name"
          />
        </div>
        <div className="preset-inputs preset-short">
          <label>Phone Number </label>
          <input
            value={formData.phone}
            type="number"
            inputMode="numeric"
            name="phone"
            onChange={changeHandler}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="preset-inputs preset-short">
          <label>E-mail</label>
          <input
            value={formData.userMail}
            type="email"
            name="userMail"
            onChange={changeHandler}
            placeholder="Enter your Email"
          />
        </div>
        <div className="preset-inputs preset-short">
          <label>City</label>
          <input
            value={formData.city}
            type="text"
            name="city"
            onChange={changeHandler}
            placeholder="Enter your city"
          />
        </div>
        <button className="booking-reserve signup-btn" onClick={submitForm}>
          Sign up
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
