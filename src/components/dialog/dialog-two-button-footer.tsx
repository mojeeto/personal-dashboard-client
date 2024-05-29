import { Button } from "@/components/ui/button";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";

const DialogTwoButtonFooter: React.FC<{
  primaryButtonText: string;
  cancelButtonText?: string;
  forForm?: boolean;
}> = ({ primaryButtonText, cancelButtonText = "Cancel", forForm = true }) => {
  return (
    <DialogFooter className="sm:justify-start">
      <Button type={forForm ? "submit" : "button"}>{primaryButtonText}</Button>
      <DialogClose asChild>
        <Button type="button" variant="destructive">
          {cancelButtonText}
        </Button>
      </DialogClose>
    </DialogFooter>
  );
};

export default DialogTwoButtonFooter;
