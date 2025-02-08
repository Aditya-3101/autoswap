import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { OpenMenu, CloseMenu } from "../actions/index";

export const NavBar = () => {
  const ham = useSelector((state) => state.HamReducer);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <NavLink to="/">
        <img
          src="https://i.imgur.com/VrZCAUQ.png"
          alt="Autoswap"
          className="company-logo"
        />
      </NavLink>
      <FaBarsStaggered
        className="ham-icon"
        onClick={() => dispatch(OpenMenu())}
      />
      <ul className={`nav-options ${ham ? "show-options" : ""}`}>
        <li className="close-btn">
          <AiOutlineClose
            className="ham-icon"
            onClick={() => dispatch(CloseMenu())}
          />
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/vehicles">Models</NavLink>
        </li>
        <li>
          <NavLink to="/testimonials">Testimonials</NavLink>
        </li>
        <li>
          <NavLink to="/team">Our team</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact </NavLink>
        </li>
      </ul>
      <div className="nav-btns">
        <Link to="/signin" className="nav-signin">
          Sign up
        </Link>
        <Link to="/login" className="nav-login">
          Log in
        </Link>
      </div>
    </div>
  );
};
