import PlusIcon from "@/components/icons/plusIcon";
import { Button } from "@/components/ui/button";
import WalletTable from "@/components/wallet/wallet-table";
import WalletRecordDialog from "@/components/wallet/wallet-record-dialog";

export default function WalletPage() {
  return (
    <main>
      <div className="flex items-center justify-between mb-5">
        <h1>Wallet Records</h1>
        <WalletRecordDialog />
      </div>
      <WalletTable />
    </main>
  );
}
