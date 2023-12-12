import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Vehicles } from "./components/Vehicles";
import { Testimonials } from "./components/Testimonials";
import { Bookform } from "./components/Bookform";
import { Contact } from "./components/Contact";
import { Team } from "./components/Team";
import { SignIn } from "./components/SignIn";
import { Login } from "./components/Login";
import { NotFound } from "./components/NotFound";
import { HomeLayout } from "./layouts/HomeLayout";
import { NavigationLayout } from "./layouts/NavigationLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route element={<NavigationLayout />}>
        <Route path="/about" element={<About />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/book" element={<Bookform />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
