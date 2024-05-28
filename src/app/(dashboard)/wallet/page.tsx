import PlusIcon from "@/components/icons/plusIcon";
import { Button } from "@/components/ui/button";
import WalletTable from "@/components/wallet";

export default function WalletPage() {
  return (
    <main>
      <div className="flex items-center justify-between mb-5">
        <h1>Wallet Records</h1>
        <Button size="icon" variant={"outline"}>
          <PlusIcon />
        </Button>
      </div>
      <WalletTable />
    </main>
  );
}
