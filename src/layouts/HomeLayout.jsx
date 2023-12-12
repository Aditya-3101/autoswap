import React from "react";
import { Outlet } from "react-router";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const HomeLayout = () => {
  return (
    <section className="parent-container">
      <NavBar />
      <Outlet />
      <Footer />
    </section>
  );
};
