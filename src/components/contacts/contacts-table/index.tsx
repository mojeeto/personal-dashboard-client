import { Table } from "@/components/ui/table";
import ContactsTableHeader from "./contacts-table-header";
import ContactsTableBody from "./contacts-table-body";

const ContactsTable: React.FC = () => {
  const tableHeader = [
    "Contact ID",
    "Name",
    "Phone Number",
    "Bank Cart Number",
    "Options",
  ];
  return (
    <Table>
      <ContactsTableHeader tableHeader={tableHeader} />
      <ContactsTableBody />
    </Table>
  );
};

export default ContactsTable;
