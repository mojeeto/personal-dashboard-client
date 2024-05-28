import { Button } from "@/components/ui/button";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";

const DialogTwoButtonFooter: React.FC<{
  primaryButtonText: string;
  cancelButtonText?: string;
}> = ({ primaryButtonText, cancelButtonText = "Cancel" }) => {
  return (
    <DialogFooter className="sm:justify-start">
      <DialogClose asChild>
        <Button type="button">{primaryButtonText}</Button>
      </DialogClose>
      <DialogClose asChild>
        <Button type="button" variant="destructive">
          {cancelButtonText}
        </Button>
      </DialogClose>
    </DialogFooter>
  );
};

export default DialogTwoButtonFooter;
