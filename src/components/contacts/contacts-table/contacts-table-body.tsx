import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import PencilSquareIcon from "@/components/icons/pencil-square-icon";
import XMarkIcon from "@/components/icons/x-mark-icon";
import { bankNumberFormatter } from "@/lib/utils";

interface ContactsTableBodyProps {
  data: {
    _id: string;
    name: string;
    phoneNumber?: string;
    bankCartNumber?: string;
  }[];
}

const ContactsTableBody: React.FC<ContactsTableBodyProps> = ({ data }) => {
  return (
    <TableBody>
      {data.map((contactData) => (
        <TableRow key={contactData._id}>
          <TableCell>{contactData._id}</TableCell>
          <TableCell>{contactData.name}</TableCell>
          <TableCell>
            {contactData.phoneNumber && contactData.phoneNumber.length > 0
              ? contactData.phoneNumber
              : "-"}
          </TableCell>
          <TableCell>
            {contactData.bankCartNumber && contactData.bankCartNumber.length > 0
              ? bankNumberFormatter(
                  contactData.bankCartNumber,
                  contactData.bankCartNumber,
                )
              : "-"}
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
      ))}
    </TableBody>
  );
};

export default ContactsTableBody;
