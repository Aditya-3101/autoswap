import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <article>
      <section className="footer-section">
        <div className="footer-company-header">
          <h3>Autoswap</h3>
          <p>
            Explore more journeys with Autoswap. Your trusted companion for
            seamless rides. Drive into your next adventure effortlessly.
          </p>
          <div className="footer-icon-section">
            <a
              href="https://github.com/Aditya-3101"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="footer-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-dhayfule-38948220b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="footer-icon" />
            </a>
          </div>
        </div>

        <section className="footer-options">
          <div className="footer-option-support">
            <h3>Support</h3>
            <p>Mobile</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
            <p>
              <Link to="/about">About</Link>
            </p>
          </div>
          <div className="footer-option-working-hr">
            <h3>Working Hours</h3>
            <p className="footer-option-day">
              Mon - Fri:
              <span className="footer-option-hr"> 09:00AM - 09:00PM</span>
            </p>
            <p className="footer-option-day">
              Sat: <span className="footer-option-hr">09:00AM - 09:00PM</span>
            </p>
            <p className="footer-option-day">
              Sun: <span className="footer-option-hr">Closed</span>
            </p>
          </div>
        </section>

        <div className="footer-subs">
          <h3>Subscription</h3>
          <p>Subscribe your Email address for latest news & updates.</p>
          <input placeholder="Enter Your Email Address" />
          <button className="footer-submit-btn">Submit</button>
        </div>
      </section>
      <div className="footer-cpyright">@2023 Autoswap. All rights reserved</div>
    </article>
  );
};
