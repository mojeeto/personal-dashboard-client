import { Dialog, DialogContent } from "@/components/ui/dialog";
import DialogTrigger from "@/components/dialog/dialog-trigger-button";
import CustomDialogHeader from "@/components/dialog/dialog-header";
import ContactDialogContent from "./contact-dialog-form";

export default function ContactsDialog() {
  return (
    <Dialog>
      <DialogTrigger />
      <DialogContent>
        <CustomDialogHeader
          title="Create Contact"
          description="Create new contact Dialog."
        />
        <ContactDialogContent />
      </DialogContent>
    </Dialog>
  );
}
