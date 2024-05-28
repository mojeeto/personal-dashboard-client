import { Dialog, DialogContent } from "@/components/ui/dialog";
import WalletRecordDialogButton from "./wallet-record-dialog-button";
import WalletRecordDialogHeader from "./wallet-record-dialog-header";
import WalletRecordDialogContent from "./wallet-record-dialog-content";
import WalletRecordDialogFooter from "./wallet-record-dialog-footer";

const WalletRecordDialog: React.FC = () => {
  return (
    <Dialog>
      <WalletRecordDialogButton />
      <DialogContent>
        <WalletRecordDialogHeader />
        <WalletRecordDialogContent />
        <WalletRecordDialogFooter />
      </DialogContent>
    </Dialog>
  );
};

export default WalletRecordDialog;
