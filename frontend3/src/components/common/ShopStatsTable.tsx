import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useGetShopStats } from "../../api/useGetShopsStats";
import { CustomerData } from "../../api/types";

export default function ShopStatsTable() {
  const { data, isLoading, isError } = useGetShopStats();

  // if (isLoading) return <CircularProgress />;
  if (isError)
    return (
      <Typography color="error">Błąd podczas ładowania danych.</Typography>
    );

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 800, margin: "auto", mt: 4 }}
    >
      <Typography variant="h6" align="center" sx={{ mt: 2, mb: 2 }}>
        Statystyki klientów
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Klient</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Liczba zakupów</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Średnia kwota</strong>
            </TableCell>
            <TableCell>
              <strong>Ulubiona kategoria</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {data.map((customer: CustomerData, index: number) => ( */}
          {data?.map((customer: CustomerData, index: number) => (
            <TableRow key={index}>
              <TableCell>{customer.customer}</TableCell>
              <TableCell align="center">{customer.total_purchases}</TableCell>
              <TableCell align="center">
                {customer.average_spent.toFixed(2)} zł
              </TableCell>
              <TableCell>{customer.favorite_category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
