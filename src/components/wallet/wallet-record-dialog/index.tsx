import { Dialog, DialogContent } from "@/components/ui/dialog";
import WalletRecordDialogContent from "./wallet-record-dialog-content";
import CustomDialogHeader from "@/components/dialog/dialog-header";
import DialogTwoButtonFooter from "@/components/dialog/dialog-two-button-footer";
import DialogTrigger from "@/components/dialog/dialog-trigger-button";

const WalletRecordDialog: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger />
      <DialogContent>
        <CustomDialogHeader
          title="Record Dialog"
          description="Some Description"
        />
        <WalletRecordDialogContent />
        <DialogTwoButtonFooter primaryButtonText="Add Record" />
      </DialogContent>
    </Dialog>
  );
};

export default WalletRecordDialog;
