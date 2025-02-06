import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ShopStatsChart from "./components/common/Chart";
import ShopStatsTable from "./components/common/ShopStatsTable";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <ShopStatsTable />
        <ShopStatsChart />
      </div>{" "}
    </QueryClientProvider>
  );
};

export default App;
