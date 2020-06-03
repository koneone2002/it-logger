import {
  GET_TECHS,
  SET_LOADING,
  TECHS_ERROR,
  ADD_TECH,
  DELETE_TECH
} from './types';

// Get techs from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/techs');
    const data = await res.json();
    console.log(data);
    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
