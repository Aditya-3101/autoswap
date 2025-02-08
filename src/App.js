import "./App.css";
import {React, Suspense,lazy} from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { HomeLayout } from "./layouts/HomeLayout";
import { NavigationLayout } from "./layouts/NavigationLayout";

const About = lazy(()=>import('./components/About').then((module)=>({default:module.About})))
const Team = lazy(()=>import('./components/Team').then((module)=>({default:module.Team})))
const Vehicles = lazy(()=>import('./components/Vehicles').then((module)=>({default:module.Vehicles})))
const Testimonials = lazy(()=>import("./components/Testimonials").then((module)=>({default:module.Testimonials})))
const Bookform = lazy(()=>import('./components/Bookform').then((module)=>({default:module.Bookform})))
const Contact = lazy(()=>import('./components/Contact').then((module)=>({default:module.Contact})))
const SignIn = lazy(()=>import('./components/SignIn').then((module)=>({default:module.SignIn})))
const Login = lazy(()=>import('./components/Login').then((module)=>({default:module.Login})))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route element={<NavigationLayout />}>
          <Route path="/about" element={
          <Suspense fallback={<h2>Loading...</h2>}>
            <About />
          </Suspense>} />
          <Route path="/vehicles" element={
          <Suspense fallback={<h2>Loading...</h2>}>
            <Vehicles />
          </Suspense>} />
          <Route path="/testimonials" element={
          <Suspense fallback={<h2>Loading...</h2>}>
            <Testimonials />
          </Suspense>
          } />
          <Route path="/book" element={
          <Suspense fallback={<h2>Loading...</h2>}>
            <Bookform />
          </Suspense>} />
          <Route path="/contact" element={
          <Suspense fallback={<h2>Loading....</h2>}>
            <Contact />
          </Suspense>} />
          <Route path="/team" element={
          <Suspense fallback={<h2>Loading...</h2>}>
            <Team />
          </Suspense>} />
          <Route path="/signin" element={
          <Suspense fallback={<h2>Loading...</h2>}>
           <SignIn />
          </Suspense>} />
          <Route path="/login" element={
          <Suspense fallback={<h2>Loading...</h2>}>
            <Login/>
          </Suspense>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
