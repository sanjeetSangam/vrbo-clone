import { createStore } from "redux";
import { locationReducer } from "./reducer";

export const location_store = createStore(locationReducer);
