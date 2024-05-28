import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const WalletTableHeader: React.FC<{ tableHeader: string[] }> = ({
  tableHeader,
}) => {
  return (
    <TableHeader>
      <TableRow>
        {tableHeader.map((headerName, index) => (
          <TableHead key={index}>{headerName}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default WalletTableHeader;
