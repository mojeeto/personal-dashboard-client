import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";

const WalletTable: React.FC = () => {
  const tableHeader = [
    "Record Id",
    "Title",
    "Record Type",
    "Price",
    "From",
    "Time",
    "Category",
    "For",
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeader.map((headerName, index) => (
            <TableHead key={index}>{headerName}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>123d3</TableCell>
          <TableCell>Buy Coffee</TableCell>
          <TableCell>
            <Badge>EXPEND</Badge>
          </TableCell>
          <TableCell>700,000 IRR</TableCell>
          <TableCell>Universiry Coffee Shop</TableCell>
          <TableCell>
            26 May
            <br />
            12:34
          </TableCell>
          <TableCell>
            <Badge variant={"secondary"}>Food & Drinks</Badge>
          </TableCell>
          <TableCell>
            <ol>
              <li>me</li>
              <li>Amir</li>
            </ol>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default WalletTable;
