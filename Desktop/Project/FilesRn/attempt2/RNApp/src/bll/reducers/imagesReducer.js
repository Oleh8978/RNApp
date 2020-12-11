import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR
} from "./../actions/type";

const initailState = {
  isFetching: false,
  errorMessage: "",
  images: {}
};

const imageReducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_IMAGES_ERROR:
      return { ...state, isFetching: false, errorMessage: action.payload };
    case FETCH_IMAGES_SUCCESS:
      return { ...state, isFetching: false, images: action.payload };
    default:
      return state;
  }
};

export default imageReducer;
