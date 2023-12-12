import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <div className="not-found-section">
        <p>Page not found!</p>
        <Link to="/" replace>
          Home
        </Link>
      </div>
    </div>
  );
};
