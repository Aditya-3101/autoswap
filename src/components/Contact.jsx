import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseMenu } from "../actions";

export const Contact = () => {
  const ham = useSelector((state) => state.HamReducer);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (ham === true) {
      dispatch(CloseMenu());
    }
  }, []);
  return (
    <div>
      <div className="contact-hero">
        <p className="contact-hero-header">Contact Autoswap</p>
        <div className="contact-info-section">
          <p className="contact-hero-subheader">Get in Touch</p>
          <p>
            Feel free to reach out to Autoswap for any inquiries, assistance, or
            feedback. We're here to help you!
          </p>
        </div>
        <div className="contact-info-section">
          <p className="contact-hero-subheader">Contact Information</p>
          <ul className="contact-info-list">
            <li>
              Phone: <span>090909091</span>
            </li>
            <li>
              Email: <span>autoswap@mail.com</span>
            </li>
          </ul>
        </div>
        <section className="contact-align">
          <div className="contact-info-section">
            <p className="contact-hero-subheader">Our Address</p>
            <address>
              123, Sunshine Street,
              <br />
              Gandhi Nagar,
              <br /> Delhi - 110001, India
            </address>
          </div>
          <div className="contact-info-section">
            <p className="contact-hero-subheader">Business Hours</p>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </section>
      </div>
      <div className="contact-info-section">
        <p className="contact-hero-subheader">How can we help you?</p>
        <p>
          Whether you have questions about our car rental services, need
          assistance with a booking, or want to provide feedback, we're eager to
          hear from you. Our team strives to ensure your experience with
          Autoswap is exceptional.
        </p>
      </div>
      <div className="contact-info-section">
        <p className="contact-hero-subheader">Reach Out</p>
        <p>
          Don't hesitate to contact us through phone or email. We aim to respond
          to all inquiries within 24 hours.
        </p>
      </div>
    </div>
  );
};
