import React, { useState } from "react";
import { useSelector } from "react-redux";

export const Model = (props) => {
  const [defaultCar, setDefaultCar] = useState({
    name: "Maruti Swift",
    manuf: "Maruti",
    type: "Hatchback",
    fuelType: "Petrol",
    priceRange: "₹5.87 - ₹8.57 Lakh",
    mileage: 23.5,
    transmission: "manual",
    doors: 4,
    rent: {
      daily: 900,
      weekly: 5200,
      monthly: 19500,
    },
    imageURL: "https://i.ibb.co/qWhd8Xg/image-4-removebg-preview.png",
  });
  const old_Data = useSelector((state) => state.Data);

  const data = old_Data.flat();
  // const data = alter_Data;

  return (
    <section>
      <div id="car-models" className="modal-header">
        <p className="plan-quote">Vehicle Models</p>
        <h2 className="plan-main-quote">
          Discover Our Exceptional Vehicle Lineup Today!
        </h2>
      </div>
      <div className="modal">
        <div className="modal-container">
          {data.map((para, index) => {
            return (
              <button
                key={index}
                className={`modal-name-container ${
                  para.name === defaultCar.name ? "active-btn" : ""
                }`}
                onClick={() => setDefaultCar(para)}
              >
                {para.name}
              </button>
            );
          })}
        </div>
        <div className="modal-img-container">
          <img
            src={defaultCar.imageURL}
            alt={defaultCar.name}
            loading="eager"
          />
        </div>
        {defaultCar !== undefined ? (
          <div className="modal-specs">
            <p className="modal-rent">
              {Number(defaultCar.rent.daily).toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
              })}{" "}
              / Per day
            </p>
            <table className="modal-table">
              <tbody>
                <tr>
                  <td>Car</td>
                  <td>{defaultCar.manuf}</td>
                </tr>
                <tr>
                  <td>Model</td>
                  <td>{defaultCar.name}</td>
                </tr>
                <tr>
                  <td>Car Type</td>
                  <td>{defaultCar.type}</td>
                </tr>
                <tr>
                  <td>Tranmission</td>
                  <td>{defaultCar.transmission}</td>
                </tr>
                <tr>
                  <td>Milage</td>
                  <td>{defaultCar.mileage}L</td>
                </tr>
                <tr>
                  <td>Fuel Type</td>
                  <td>{defaultCar.fuelType}</td>
                </tr>
              </tbody>
            </table>
            <a href="#book-main" className="modal-rent">
              Book Now
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
};
