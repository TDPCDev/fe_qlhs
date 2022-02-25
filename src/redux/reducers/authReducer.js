import { authTypes } from "../constants/auth-types";

const userLocal = localStorage.getItem("user");

const stateDefaut = {
  user: userLocal ? JSON.parse(userLocal) : null,
  loading: false,
  message: "",
  error: false,
};
export const authReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case authTypes.START: {
      return { ...state, loading: true, message: "", error: false };
    }
    case authTypes.ERROR: {
      const data = action.data;
      console.log(data);
      return { ...state, loading: false, message: data.message, error: true };
    }
    case authTypes.SUCCESS: {
      const data = action.data;
      const { accessToken } = data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      state.error = false;
      state.loading = false;
      state.message = data.message;
      state.user = { ...data.user };

      return { ...state };
    }
    default:
      return { ...state };
  }
};
