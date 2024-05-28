import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

export interface ContactsTableHeaderProps {
  tableHeader: string[];
}

const ContactsTableHeader: React.FC<ContactsTableHeaderProps> = ({
  tableHeader,
}) => {
  return (
    <TableHeader>
      <TableRow>
        {tableHeader.map((tableHeaderName, index) => (
          <TableHead key={index}>{tableHeaderName}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default ContactsTableHeader;
