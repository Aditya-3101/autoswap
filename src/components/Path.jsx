import React from "react";
import { useLocation, Outlet } from "react-router";

export const Path = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div>path</div>
      <Outlet />
    </div>
  );
};
