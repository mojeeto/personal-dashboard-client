import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stringTitle(value: string) {
  const firstCharacter = value.trim()[0].toUpperCase();
  return `${firstCharacter}${value.slice(1)}`;
}
