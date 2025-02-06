import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";
import { CustomerData } from "./types";
import { getShopStats } from "./requests";

export const useGetShopStats = () => {
  return useQuery<CustomerData[]>({
    queryKey: queryKeys.shopStats.all,
    queryFn: async () => {
      const response = await getShopStats();
      return response.data;
    },
  });
};
