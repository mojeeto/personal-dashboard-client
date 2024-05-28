import { DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import PlusIcon from "../icons/plus-icon";

export default function DialogTriggerButton() {
  return (
    <DialogTrigger asChild>
      <Button size="icon" variant={"outline"}>
        <PlusIcon />
      </Button>
    </DialogTrigger>
  );
}
