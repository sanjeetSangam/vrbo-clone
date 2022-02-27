import { DETAILS, LOCATION } from "./actionTypes";

export const getLocation = (payload) => {
  return {
    type: LOCATION,
    payload,
  };
};

export const getDetails = (payload) => {
  return {
    type: DETAILS,
    payload,
  };
};
