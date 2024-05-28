import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import PencilSquareIcon from "@/components/icons/pencil-square-icon";
import XMarkIcon from "@/components/icons/x-mark-icon";

const ContactsTableBody: React.FC = () => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>123D32</TableCell>
        <TableCell>Mojtaba Nouri</TableCell>
        <TableCell>-</TableCell>
        <TableCell>-</TableCell>
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

export default ContactsTableBody;
