import PlusIcon from "@/components/icons/plus-icon";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";

const WalletRecordDialogButton: React.FC = () => {
  return (
    <DialogTrigger asChild>
      <Button size="icon" variant={"outline"}>
        <PlusIcon />
      </Button>
    </DialogTrigger>
  );
};

export default WalletRecordDialogButton;
