import React from "react";

export const Homeplans = () => {
  const ideas = [
    {
      id: 1,
      thumb:
        "https://i.ibb.co/W3g4FLR/undraw-Order-ride-re-372k-removebg-preview.png",
      head: "Select Your Car",
      info: "Discover our wide variety of cars that suit all your driving needs. we've got the perfect option for you. Find your ideal ride with us for every trip you take",
    },
    {
      id: 2,
      thumb:
        "https://i.ibb.co/SrcYLr8/undraw-City-driver-re-9xyv-removebg-preview.png",
      head: "Let's Go",
      info: "From highway adventures to city explorations, our diverse car selection has you covered. Find the perfect ride for your journey with our extensive range of vehicles.",
    },
    {
      id: 3,
      thumb:
        "https://i.ibb.co/jgNbW8L/undraw-Active-support-re-b7sj-removebg-preview.png",
      head: "Contact Support",
      info: "Our knowledgeable and friendly operators are always ready to help with any questions or concerns",
    },
  ];

  return (
    <div className="plan-section">
      <p className="plan-quote">Plan your trip now</p>
      <h2 className="plan-main-quote">Your Road, Your Rules</h2>
      <div className="card-gallery">
        {ideas.map((plan, index) => {
          return (
            <div key={index} className="card">
              <img src={plan.thumb} alt={plan.head} />
              <p className="card-heading">{plan.head}</p>
              <p className="card-desc">{plan.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
