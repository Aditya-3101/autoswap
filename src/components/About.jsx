import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CloseMenu } from "../actions";
import { FaCar } from "react-icons/fa";
import { GiHomeGarage, GiStarFormation } from "react-icons/gi";
import { Promo } from "./Promo";

export const About = () => {
  const ham = useSelector((state) => state.HamReducer);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (ham === true) {
      dispatch(CloseMenu());
    }
  }, []);

  return (
    <div>
      <section className="about-section">
        <img
          src="https://i.imgur.com/iSu7Peo.jpeg"
          alt="About-us"
          className="about-cover"
        />
        <div className="about-us">
          <p className="about-header">Autoswap: seamless vehicle exchange</p>
          <p className="about-info">
            At our car rental service, we understand that needs can change
            during your rental period. Experience the convenience and
            flexibility of Autoswap during your rental. Embrace the freedom to
            tailor your vehicle selection to your changing needs effortlessly.
          </p>
        </div>
      </section>
      <div className="about-points">
        <div className="about-stats">
          <FaCar className="active about-status-icon" />
          <p className="about-stats-info">
            <span className="stats-highlight">20+</span>
            <span className="stats-caps"> Car Types</span>
          </p>
        </div>
        <div className="about-stats">
          <GiStarFormation className="active about-status-icon" />
          <p className="about-stats-info">
            <span className="stats-highlight">4.4</span>
            <span className="stats-caps"> Avg Rating</span>
          </p>
        </div>
        <div className="about-stats">
          <GiHomeGarage className="active about-status-icon" />
          <p className="about-stats-info">
            <span className="stats-highlight">80+</span>
            <span className="stats-caps">Repair Shops</span>
          </p>
        </div>
      </div>
      <Promo />
    </div>
  );
};
