import { HamReducer } from "./Ham";
import { Data } from "./data";
import { combineReducers } from "redux";
import { Bookings } from "./booking";
import { Saved } from "./SelectedCar";
import { Login } from "./login";

export const allReducers = combineReducers({
  HamReducer,
  Data,
  Bookings,
  Saved,
  Login,
});
