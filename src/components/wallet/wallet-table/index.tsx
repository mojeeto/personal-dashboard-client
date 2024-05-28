import { Table } from "@/components//ui/table";
import WalletTableBody from "./wallet-table-body";
import WalletTableHeader from "./wallet-table-header";

const WalletTable: React.FC = () => {
  const tableHeader = [
    "Record Id",
    "Title",
    "Price",
    "From",
    "Time",
    "For",
    "Options",
  ];
  return (
    <Table>
      <WalletTableHeader tableHeader={tableHeader} />
      <WalletTableBody />
    </Table>
  );
};

export default WalletTable;
