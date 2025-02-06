import { axiosInstance } from "./axiosinstance";
import { CustomerData } from "./types";

export const getShopStats = async () => {
  const response = await axiosInstance().get<CustomerData[]>(`/getShopStats/`);
  return response;
};
