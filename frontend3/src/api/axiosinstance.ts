import axios from "axios";

export const axiosInstance = () => {
  const axiosWrapper = axios.create({
    baseURL: "http://127.0.0.1:5070",
  });

  return axiosWrapper;
};
