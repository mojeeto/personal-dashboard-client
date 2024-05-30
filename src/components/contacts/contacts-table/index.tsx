import { Table } from "@/components/ui/table";
import ContactsTableHeader from "./contacts-table-header";
import ContactsTableBody from "./contacts-table-body";
import { getContacts } from "@/actions/contacts";

export default async function ContactsTable() {
  const response = await getContacts();
  let contactsData = [];
  console.log(response.message);
  if (response.statusCode === 200) {
    contactsData = response.data;
  }
  const tableHeader = [
    "Contact ID",
    "Name",
    "Phone Number",
    "Bank Cart Number",
    "Options",
  ];
  return contactsData.length < 1 ? (
    "No Data Founded!"
  ) : (
    <Table>
      <ContactsTableHeader tableHeader={tableHeader} />
      <ContactsTableBody data={contactsData} />
    </Table>
  );
}
