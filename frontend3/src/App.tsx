import ShopStatsChart from "./components/common/Chart";
import ShopStatsTable from "./components/common/ShopStatsTable";

const App = () => {
  return (
    <div className="app-container">
      <ShopStatsTable />
      <ShopStatsChart />
    </div>
  );
};

export default App;
