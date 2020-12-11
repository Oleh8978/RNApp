import { UPDATE_FIRST, UPDATE_LAST, UPDATE_BOTH } from "./textype";

export const updateFirstName = (fname) => ({
  type: UPDATE_FIRST,
  payload: fname
});

export const updateLastName = (lname) => ({
  type: UPDATE_LAST,
  payload: lname
});

export const updateBothName = (fname, lname) => ({
  type: UPDATE_BOTH,
  fname: fname,
  lname: lname
});
