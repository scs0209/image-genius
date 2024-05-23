import { aspectRatioOptions } from "@/constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // 네이티브 JavaScript 에러 (예: TypeError, RangeError)
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    // 에러 메시지 문자열
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    // 알 수 없는 타입의 에러
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};

// GE IMAGE SIZE
export type AspectRatioKey = keyof typeof aspectRatioOptions;
