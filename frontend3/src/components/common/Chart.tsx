import { Paper, CircularProgress, Typography } from "@mui/material";
import { useGetShopStats } from "../../api/useGetShopsStats";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ShopStatsChart() {
  const { data, isLoading, isError } = useGetShopStats();

  if (isLoading) return <CircularProgress />;
  if (isError)
    return (
      <Typography color="error">Błąd podczas ładowania danych.</Typography>
    );

  const chartData = {
    labels: data?.map((customer) => customer.customer) || [],
    datasets: [
      {
        label: "Liczba zakupów",
        data: data?.map((customer) => customer.total_purchases) || [],
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  return (
    <Paper sx={{ maxWidth: 800, margin: "auto", mt: 4, p: 2 }}>
      <Typography variant="h6" align="center" sx={{ mt: 2, mb: 2 }}>
        Liczba zakupów według klientów
      </Typography>
      <Bar data={chartData} />
    </Paper>
  );
}
