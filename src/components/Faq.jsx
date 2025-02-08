import React from "react";

export const Faq = () => {
  return (
    <div id="promo-application" className="promo-app">
      <div className="promo-detail">
        <section>
          <h3 className="promo-quote-app">
            Enhance your experience, download our app today!
          </h3>
          <p className="promo-subtext-app">
            Unlock the full potential—download our app for an enriched
            experience! Maximize your journey with exclusive features and
            seamless access at your fingertips. Elevate every moment,
            effortlessly, with our app's tailored benefits.
          </p>
        </section>
        <div className="promo-app-logo">
          <img
            src="https://i.ibb.co/FYkrPzx/pngwing-com.png"
            alt="AutoSwap - ios"
          />
          <img
            src="https://i.ibb.co/nQ5n5bz/en-badge-web-generic-removebg-preview.png"
            alt="AutoSwap - Android"
          />
        </div>{" "}
      </div>
      <div className="promo-mobile-app">
        <img
          src="https://files.catbox.moe/ccbsdj.png"
          alt="mobile-cover"
        />
      </div>
    </div>
  );
};
