import React, { useLayoutEffect } from "react";
import { Reviews } from "./Reviews";
import { useDispatch, useSelector } from "react-redux";
import { CloseMenu } from "../actions";

export const Testimonials = () => {
  const ham = useSelector((state) => state.HamReducer);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (ham === true) {
      dispatch(CloseMenu());
    }
  }, []);
  return (
    <div className="testimonials">
      <Reviews />
    </div>
  );
};
