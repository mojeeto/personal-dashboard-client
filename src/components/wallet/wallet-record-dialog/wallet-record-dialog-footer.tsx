import { Button } from "@/components/ui/button";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";

const WalletRecordDialogFooter: React.FC = () => {
  return (
    <DialogFooter className="sm:justify-start">
      <DialogClose asChild>
        <Button type="button">Add Record</Button>
      </DialogClose>
      <DialogClose asChild>
        <Button type="button" variant="destructive">
          Cancel
        </Button>
      </DialogClose>
    </DialogFooter>
  );
};

export default WalletRecordDialogFooter;
