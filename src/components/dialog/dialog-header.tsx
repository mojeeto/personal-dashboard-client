import { DialogDescription, DialogTitle, DialogHeader } from "../ui/dialog";

export default function CustomDialogHeader(props: {
  title: string;
  description: string;
}) {
  const { title, description } = props;
  return (
    <DialogHeader>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </DialogHeader>
  );
}
