import React from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

export const NavigationLayout = () => {
  const location = useLocation();

  return (
    <div>
      <div className="nav-flow">
        <Link to="/" className="nav-flow-base">
          Home
        </Link>
        {location.pathname}
      </div>
      <Outlet />
    </div>
  );
};
