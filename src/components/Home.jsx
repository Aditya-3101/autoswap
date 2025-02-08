import React, { useState, useEffect } from "react";
import { Homeplans } from "./Homeplans";
import { Model } from "./Model";
import { Banner } from "./Banner";
import { Promo } from "./Promo";
import { Reviews } from "./Reviews";
import { Faq } from "./Faq";
import { CiCircleCheck } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AddItem, AddBooking, SaveCar } from "../actions";
import { useNavigate } from "react-router";

export const Home = () => {
  const [booking, setBooking] = useState({
    cartype: null,
    pickupLocation: null,
    dropofLocation: null,
    pickupDate: null,
    dropofDate: null,
  });
  const [preData, setPreData] = useState([]);
  const old_Data = useSelector((state) => state.Data);
  const alter_Data = [...new Set(old_Data.flat())];
  const data = [...new Set(preData.map((par) => par.name))];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Autoswap | Your place to rent cars";
    fetch("https://autoswap-api.vercel.app/allCars")
      .then((response) => response.json())
      .then((res) => {
        dispatch(AddItem(res));
        setPreData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeBookings = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setBooking((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const today = new Date().toISOString().split("T")[0];

  const submitDetail = (e) => {
    e.preventDefault();
    if (
      booking.cartype !== null &&
      booking.pickupLocation !== null &&
      booking.dropofLocation !== null &&
      booking.pickupDate !== null &&
      booking.dropofDate !== null
    ) {
      if (booking.dropofDate >= booking.pickupDate) {
        dispatch(AddBooking(booking));
        let save = alter_Data.filter(
          (para) =>
            String(para.name).toLocaleLowerCase() ===
            String(booking.cartype).toLocaleLowerCase()
        );
        console.log(save);
        dispatch(SaveCar(save));
        navigate("/book");
      } else {
        alert("Please Enter Date Properly.");
      }
    } else {
      alert("Please fill required fields");
    }
  };

  return (
    <div>
      <div className="hero-section">
        <div className="hero-main">
          <p className="short-quote">Drive to possibilites</p>
          <p className="main-quote">
            Your <span>rental</span>
            <br /> your gateway to exploration
          </p>
          <p className="hero-intro">
            Unleash your dream ride. Unbeatable prices, unlimited miles,
            flexible pickups, and more. Your journey begins now
          </p>
          <section className="hero-btn-sections">
            <a href="#book-main" className="hero-book-btn">
              Book Ride
              <CiCircleCheck />
            </a>
            <a href="#promo-application" className="shallow-border">
              Learn More <MdArrowForwardIos />
            </a>
          </section>
        </div>
        <div className="hero-img-container">
          <img
            src="https://i.imgur.com/P1AYuRW.png"
            alt="hero-cover"
            className="hero-car"
          />
        </div>
      </div>
      <section id="book-main" className="Main-section">
        <div className="Main-book">
          <h3 className="main-section-subheading">Book a car</h3>
          <form className="book-section">
            <div className="box-car type">
              <label>
                <FaCar />
                Select your car
              </label>
              <select
                value={booking.cartype}
                name="cartype"
                onChange={changeBookings}
              >
                <option>Select your car type</option>
                {data.map((name) => {
                  return (
                    <option value={name} key={name}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="box-car pickup-location">
              <label>
                <IoLocationSharp />
                pick-up
              </label>
              <select
                value={booking.pickupLocation}
                name="pickupLocation"
                onChange={changeBookings}
              >
                <option>Select pick up location</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Dehli">Dehli</option>
                <option value="Indore">Indore</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Ahmedabad">Ahmedabad</option>
              </select>
            </div>
            <div className="box-car dropof-location">
              <label>
                <IoLocationSharp />
                drop-of
              </label>
              <select
                value={booking.dropofLocation}
                name="dropofLocation"
                onChange={changeBookings}
              >
                <option>Select drop off location</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Dehli">Dehli</option>
                <option value="Indore">Indore</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Ahmedabad">Ahmedabad</option>
              </select>
            </div>
            <div className="box-car pickup-date">
              <label>
                <BsCalendarDate />
                pick-up
              </label>
              <input
                type="date"
                value={booking.pickupDate}
                onChange={changeBookings}
                name="pickupDate"
                placeholder="dd-mm-yyyy"
                onKeyDown={(e) => e.preventDefault()}
                min={today}
              />
            </div>
            <div className="box-car dropof-date">
              <label>
                <BsCalendarDate />
                drop-off
              </label>
              <input
                type="date"
                value={booking.dropofDate}
                onChange={changeBookings}
                name="dropofDate"
                placeholder="dd-mm-yyyy"
                onKeyDown={(e) => e.preventDefault()}
                min={today}
              />
            </div>
            <div className="box-car book-btn">
              <button onClick={submitDetail}>Book Now</button>
            </div>
          </form>
        </div>
      </section>
      <Homeplans />
      <Model />
      <Banner />
      <Promo />
      <Reviews />
      <Faq />
    </div>
  );
};
