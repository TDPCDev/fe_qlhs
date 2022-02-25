import authApi from "../../api/authApi";
import { authTypes } from "../constants/auth-types";
const startFetch = () => {
  return {
    type: authTypes.START,
  };
};
const fectError = (data) => {
  return {
    type: authTypes.ERROR,
    data: data,
  };
};
export const loginAction = (user) => {
  return async (dispatch) => {
    dispatch(startFetch());
    await authApi
      .login(user)
      .then((response) => {
        dispatch({ type: authTypes.SUCCESS, data: response });
      })
      .catch((error) => {
        dispatch(fectError(error));
      });
  };
};
