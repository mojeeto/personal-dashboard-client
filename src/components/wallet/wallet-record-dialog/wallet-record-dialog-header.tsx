import { DialogHeader } from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";

const WalletRecordDialogHeader: React.FC = () => {
  return (
    <DialogHeader>
      <DialogTitle>Record Dialog</DialogTitle>
      <DialogDescription>Create New Record</DialogDescription>
    </DialogHeader>
  );
};

export default WalletRecordDialogHeader;
