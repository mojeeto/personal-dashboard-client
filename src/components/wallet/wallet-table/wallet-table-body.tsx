import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ArrowPathIcon from "@/components/icons/arrow-path-icon";
import XMarkIcon from "@/components/icons/x-mark-icon";
import PencilSquareIcon from "@/components/icons/pencil-square-icon";

export type RecordType = {
  record_id: string;
  title: string;
  record_type: string;
  price: string;
  from: {
    name: string;
  };
  time: Date;
  category: {
    title: string;
  };
  forContacts: {
    name: string;
  }[];
};
export interface WalletTableBodyProps {
  records: RecordType[];
}

const WalletTableBody: React.FC = () => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>123d3</TableCell>
        <TableCell className="space-y-1">
          Buy Coffee <br />
          <Badge variant={"secondary"}>Food & Drinks</Badge>
        </TableCell>
        <TableCell className="space-y-1">
          700,000 IRR <br />
          <Badge variant={"secondary"}>EXPEND</Badge>
        </TableCell>
        <TableCell>Universiry Coffee Shop</TableCell>
        <TableCell>
          26 May
          <br />
          12:34
        </TableCell>
        <TableCell>
          <ol>
            <li>me</li>
            <li>Amir</li>
          </ol>
        </TableCell>
        <TableCell className="space-x-1">
          <Button size={"icon"} variant={"ghost"} className="size-9">
            <PencilSquareIcon />
          </Button>
          <Button size={"icon"} variant={"destructive"} className="size-9">
            <XMarkIcon />
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default WalletTableBody;
