import { Table } from "@/components//ui/table";
import WalletTableBody from "./wallet-table-body";
import WalletTableHeader from "./wallet-table-header";

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
      <WalletTableHeader tableHeader={tableHeader} />
      <WalletTableBody />
    </Table>
  );
};

export default WalletTable;
