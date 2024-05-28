import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stringTitle(value: string) {
  const firstCharacter = value.trim()[0].toUpperCase();
  return `${firstCharacter}${value.slice(1)}`;
}

export function bankNumberFormatter(value: string, prevState: string) {
  const replacedValue = value.replaceAll("-", "");
  if (isNaN(+replacedValue) || replacedValue.length > 16) return prevState;
  let result = "";
  for (let i = 0; i < replacedValue.length; i++) {
    if (i === 4 || i === 8 || i === 12) {
      result += `-${replacedValue[i]}`;
      continue;
    }
    result += replacedValue[i];
  }
  return result;
}
