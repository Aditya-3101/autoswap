import React from "react";
import { FaQuoteRight } from "react-icons/fa";

export const Reviews = () => {
  return (
    <div id="testimonials" className="review-page">
      <section className="review-section">
        <h3>Our Reviews</h3>
        <p>
          Explore the stories of satisfaction from our customers through their
          testimonials. Experience firsthand the exceptional service and results
          they've encountered with us.
        </p>
      </section>
      <div className="review-container">
        <article className="review-card">
          <p className="review">
            "Amazing experience! Easy booking, top-notch service, and a flawless
            car. Highly recommend for a hassle-free trip!"
          </p>
          <div>
            <img
              src="https://i.ibb.co/LJ16KxX/photo-1633332755192-727a05c4013d-w-600-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
              alt="John Doe"
              className="user-img"
            />
            <p className="reviewer-container">
              <p className="reviewer">
                <span className="user-reviewer">John Doe</span>
                <span className="reviewer-location">Mumbai</span>
              </p>
              <FaQuoteRight className="quote-icon" />
            </p>
          </div>
        </article>
        <article className="review-card">
          <p className="review">
            "Exceptional service! Seamless booking, diverse vehicle options, and
            top-notch customer support made my trip stress-free."
          </p>
          <div>
            <img
              alt="Alan Kimberly"
              src="https://i.ibb.co/3dkkhbr/photo-1535713875002-d1d0cf377fde-q-80-w-1780-auto-format-fit-crop-ixlib-rb-4-0.jpg"
              className="user-img"
            />
            <p className="reviewer-container">
              <p className="reviewer">
                <span className="user-reviewer">Alan Kimberly</span>
                <span className="reviewer-location">Pune</span>
              </p>
              <FaQuoteRight className="quote-icon" />
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};
