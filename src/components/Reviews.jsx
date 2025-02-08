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
              src="https://i.imgur.com/S3s4sB7.jpeg"
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
              src="https://i.imgur.com/TpjzBOi.jpeg"
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
