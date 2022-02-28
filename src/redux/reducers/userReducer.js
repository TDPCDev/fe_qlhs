import { userTypes } from "../constants/user-types";

const stateDefaut = {
  users: [],
  loading: false,
  message: "",
  error: false,
};
export const authReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case userTypes.START: {
      return { ...state, loading: true, message: "", error: false };
    }
    case userTypes.ERROR: {
      const data = action.data;
      console.log(data);
      return { ...state, loading: false, message: data.message, error: true };
    }
    case userTypes.ADDNEW: {
      return { ...state };
    }
    default:
      return { ...state };
  }
};
