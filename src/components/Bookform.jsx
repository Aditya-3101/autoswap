import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PiWarningCircleFill } from "react-icons/pi";
import { GiConfirmed } from "react-icons/gi";
import { useNavigate } from "react-router";

export const Bookform = () => {
  const data = useSelector((state) => state.Bookings);
  const savedCar = useSelector((state) => state.Saved);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pickupTime: null,
    dropofTime: null,
    pickupAddress: null,
    dropofAddress: null,
    firstName: null,
    lastName: null,
    phone: null,
    userMail: null,
    city: null,
  });
  const [showModal, setShowModal] = useState(false);

  const userVehicle = savedCar.flat();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const confirmModal = () => {
    setShowModal(false);
    navigate("/");
  };

  const submitAll = (e) => {
    e.preventDefault();
    if (
      formData.firstName !== null &&
      formData.lastName !== null &&
      formData.phone !== null &&
      formData.userMail !== null &&
      formData.city !== null &&
      formData.pickupAddress !== null &&
      formData.dropofAddress !== null &&
      formData.pickupTime !== null &&
      formData.dropofTime !== null
    ) {
      setShowModal(true);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div>
      <div className="booking-form">
        <div className="booking-preset">
          <section className="booking-preset-header">
            Complete Reservation
          </section>
          <div className="booking-preset-note">
            <PiWarningCircleFill className="booking-warning" />
            Upon completing the reservation you will receive the details.
          </div>
          <section className="booking-preset-data">
            <div>
              <p className="preset-header">Location and Date</p>
              <div>
                {data.map((par, index) => {
                  return (
                    <div key={index} className="preset-section">
                      <div className="preset-inputs">
                        <label>Pick-up Date</label>
                        <input type="text" value={par.pickupDate} readOnly />
                      </div>
                      <div className="preset-inputs">
                        <label>Drop-of Date</label>
                        <input type="text" value={par.dropofDate} readOnly />
                      </div>
                      <section className="preset-location">
                        <div className="preset-citys">
                          <label>Pick-up Location</label>
                          <input
                            type="text"
                            value={par.pickupLocation}
                            readOnly
                          />
                        </div>
                        <div className="preset-citys">
                          <label>Drop-of Location</label>
                          <input
                            type="text"
                            value={par.dropofLocation}
                            readOnly
                          />
                        </div>
                      </section>
                      <section className="preset-location">
                        <div className="preset-citys">
                          <label>Pick-up Time</label>
                          <input
                            value={formData.pickupTime}
                            type="time"
                            name="pickupTime"
                            placeholder="HH:MM"
                            onChange={changeHandler}
                          />
                        </div>
                        <div className="preset-citys">
                          <label>Drop-of Time</label>
                          <input
                            value={formData.dropofTime}
                            type="time"
                            name="dropofTime"
                            placeholder="HH:MM"
                            onChange={changeHandler}
                          />
                        </div>
                      </section>

                      <div className="preset-inputs">
                        <label>Pick up address</label>
                        <input
                          value={formData.pickupAddress}
                          type="text"
                          name="pickupAddress"
                          placeholder="Enter Your Pick up Location"
                          onChange={changeHandler}
                        />
                      </div>
                      <div className="preset-inputs">
                        <label>Drop-of address</label>
                        <input
                          value={formData.dropofAddress}
                          type="text"
                          name="dropofAddress"
                          placeholder="Enter Your Drop of Location "
                          onChange={changeHandler}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              {userVehicle.map((par) => {
                return (
                  <div className="preset-cover">
                    <p className="preset-name">{par.name}</p>
                    <img key={par.id} src={par.imageURL} alt={par.name} />
                  </div>
                );
              })}
            </div>
          </section>
          <div>
            <p className="preset-header">Personal information</p>
            <div className="preset-inputs preset-short">
              <label>First Name</label>
              <input
                value={formData.firstName}
                type="text"
                name="firstName"
                onChange={changeHandler}
                placeholder="Enter your first name"
              />
              {/* <input value={formData.userMail} name="userMail" onChange={changeHandler} />
            <input value={formData.lastName} name="lastName" onChange={changeHandler} /> */}
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
          </div>
          <div className="booking-reserve" onClick={submitAll}>
            Reserve
          </div>
        </div>
      </div>
      <div
        className={`confirm-page ${showModal === false ? "hide-confirm" : ""}`}
      >
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
