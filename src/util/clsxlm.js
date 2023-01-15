import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function clsxm(...classes) {
  return twMerge(clsx(...classes));
}
