import ContactsDialog from "@/components/contacts/contacts-dialog";
import ContactsTable from "@/components/contacts/contacts-table";

export default function ContactsPage() {
  return (
    <main>
      <div className="flex items-center justify-between mb-5">
        <h1>Contacts</h1>
        <ContactsDialog />
      </div>
      <ContactsTable />
    </main>
  );
}
