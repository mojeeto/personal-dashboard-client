import { cn } from "@/lib/utils";
import Divider from "./ui/divider";

interface BoxProps {
  children: React.ReactNode;
  title?: string;
  border?: boolean;
  className?: string;
}

export const Box: React.FC<BoxProps> = ({
  children,
  title,
  border = true,
  className = "",
}) => {
  return (
    <div
      className={cn(
        border ? "border-2 p-5 rounded-xl" : "",
        "w-[300px] lg:w-[450px]",
        className,
      )}
    >
      {title && (
        <>
          <h3 className={cn("title")}>{title}</h3>
          <Divider />
        </>
      )}
      {children}
    </div>
  );
};

export default Box;
