import axiosClient from "./axiosClient";

const authApi = {
  login: (data, params) => {
    const url = "auth";
    return axiosClient.post(url, data, { params });
  },
};

export default authApi;
