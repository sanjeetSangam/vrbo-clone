import { DETAILS, LOCATION } from "./actionTypes";

const init = {
  location: [],
  details: [],
};

export const locationReducer = (store = init, { type, payload }) => {
  switch (type) {
    case LOCATION:
      return { ...store, location: { ...store.location, payload } };
    case DETAILS:
      return { ...store, details: { ...store.details, payload } };

    default:
      return store;
  }
};
