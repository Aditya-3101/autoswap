import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseMenu } from "../actions";
import { FaCarSide } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { PiGasCanFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export const Vehicles = () => {
  const ham = useSelector((state) => state.HamReducer);
  const data = useSelector((state) => state.Data);
  const dispatch = useDispatch();

  const newData = data.flat();

  useLayoutEffect(() => {
    if (ham === true) {
      dispatch(CloseMenu());
    }
  }, []);
  return (
    <div>
      <div className="vehicle-lists">
        {newData.map((para, index) => {
          return (
            <section key={index} className="vehicle-card">
              <img
                src={para.imageURL}
                alt={para.name}
                className="vehicle-cover"
              />
              <div className="vehicle-short-info">
                <p className="vehicle-name">{para.name}</p>
                <p className="vehicle-rate">
                  <span className="vehicle-price-highlight">
                    {Number(para.rent.daily).toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                    })}
                  </span>
                  /day
                </p>
              </div>
              <div className="vehicle-short-info">
                <p className="vehicle-short-spec">
                  <FaCarSide className="vehicle-short-icon" />
                  <span>{para.manuf}</span>
                </p>
                <p className="vehicle-short-spec">
                  <MdOutlineAirlineSeatReclineNormal className="vehicle-short-icon" />
                  <span>{para.seats}</span>
                </p>
              </div>
              <div className="vehicle-short-info">
                <p className="vehicle-short-spec">
                  <FaGear className="vehicle-short-icon" />
                  <span>{para.transmission}</span>
                </p>
                <p className="vehicle-short-spec">
                  <PiGasCanFill className="vehicle-short-icon" />
                  <span>{para.fuelType}</span>
                </p>
              </div>
              <Link to="/#book-main" className="vehicle-book-btn">
                Book Now
              </Link>
            </section>
          );
        })}
      </div>
    </div>
  );
};
