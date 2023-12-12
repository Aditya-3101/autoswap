import React from "react";

export const Promo = () => {
  return (
    <div className="promo-class">
      <div className="promo-main-section">
        <p className="promo-ques">Why choose us</p>
        <div>
          Revolutionize your travel experience with us. Our service is designed
          for your ease effortless bookings at your fingertips, allowing you to
          quickly secure the perfect vehicle for your needs.
        </div>
        <div>
          <a href="#book-main" className="promo-find-out">
            Find out
          </a>
        </div>
      </div>
      <div className="perks-collection">
        <section className="perk-card">
          <img
            src="https://i.ibb.co/3N3c6q4/undraw-Savings-re-eq4w-removebg-preview.png"
            alt="Transparent pricing"
          />
          <h3>Transparent pricing</h3>
          <p>
            Get it all at once our transparent pricing includes everything you
            need for a worry-free rental experience.
          </p>
        </section>
        <section className="perk-card">
          <img
            src="https://i.ibb.co/hyjFh26/undraw-Map-dark-re-36sy-removebg-preview.png"
            alt="Gps and wifi options"
          />
          <h3>Gps and Wifi options</h3>
          <p>
            Navigate and stay connected effortlessly with GPS and Wi-Fi in every
            vehicle. Explore with ease and convenience.
          </p>
        </section>
        <section className="perk-card">
          <img
            src="https://i.ibb.co/nmkgJTf/undraw-Note-list-re-r4u9-removebg-preview.png"
            alt="flexible booking options"
          />
          <h3>Flexible Booking options</h3>
          <p>
            Your schedule, your terms. Experience flexibility like never before
            with our diverse booking options.
          </p>
        </section>
      </div>
    </div>
  );
};
