import ImgToBase64 from 'react-native-image-base64';
import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR
} from "./type";

export const fetchingImagesRequest = () => ({ type: FETCH_IMAGES_REQUEST });

export const fetchingImagesSuccess = (json) => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: json
});

export const fetchingImagesErrorr = (error) => ({
  type: FETCH_IMAGES_ERROR,
  payload: error
});

export const fetchImages = () => {
  return async (dispatch) => {
    dispatch(fetchingImagesRequest());
    try {
      let response = await fetch(
        "https://api.unsplash.com/photos/random?client_id=JuQ16E5DtwMi9RvxvZZ5Y_kwCNDyG18dxFaLThROgow"
      );
      let json = await response.json();
      ImgToBase64.getBase64String(json.urls.small)
      .then(base64String => dispatch(fetchingImagesSuccess(base64String)))
      .catch(err => console.log(err));
      
    } catch (error) {
      dispatch(fetchingImagesErrorr(error));
    }
  };
};
