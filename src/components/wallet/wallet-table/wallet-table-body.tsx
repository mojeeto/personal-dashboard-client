import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const WalletTableBody: React.FC = () => {
  return (
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
  );
};

export default WalletTableBody;
