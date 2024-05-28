import { Dialog, DialogContent } from "@/components/ui/dialog";
import DialogTrigger from "@/components/dialog/dialog-trigger-button";
import CustomDialogHeader from "@/components/dialog/dialog-header";
import DialogTwoButtonFooter from "@/components/dialog/dialog-two-button-footer";

export default function ContactsDialog() {
  return (
    <Dialog>
      <DialogTrigger />
      <DialogContent>
        <CustomDialogHeader
          title="Create Contact"
          description="Example Description"
        />
        <div>
          <form>Example form</form>
        </div>
        <DialogTwoButtonFooter primaryButtonText="Create Contact" />
      </DialogContent>
    </Dialog>
  );
}
