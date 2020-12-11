import { UPDATE_FIRST, UPDATE_LAST, UPDATE_BOTH } from "./../actions/textype";

const initailState = {
  firstName: "",
  lastName: ""
};

const nameReducer = (state = initailState, action) => {
  switch (action.type) {
    case UPDATE_FIRST:
      return { ...state, firstName: action.payload };
    case UPDATE_LAST:
      return { ...state, lastName: action.payload };
    case UPDATE_BOTH:
      return {
        ...state,
        firstName: action.fname,
        lastName: action.lname
      };
    default:
      return state;
  }
};

export default nameReducer;
