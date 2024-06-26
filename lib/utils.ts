import { aspectRatioOptions } from "@/constants";
import { type ClassValue, clsx } from "clsx";
import qs from "qs";
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

// PLACEHOLDER LOADER - while image is transforming
/**
 * shimmer 함수: SVG 이미지를 생성하는 함수.
 * @params w: 이미지의 너비를 지정.
 * @params h: 이미지의 높이를 지정.
 * @return: "shimmer" 효과가 적용된 SVG 이미지 문자열을 반환.
 */
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#7986AC" offset="20%" />
      <stop stop-color="#68769e" offset="50%" />
      <stop stop-color="#7986AC" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#7986AC" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

/**
 * 이 함수는 서버 환경과 클라이언트 환경(브라우저)에서 모두 사용 가능합니다.
 *
 * toBase64 함수: 주어진 문자열을 base64로 인코딩
 * @params str: 인코딩할 문자열
 * @return: base64로 인코딩된 문자열을 반환
 */
const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

/**
 * dataUrl 상수: 'shimmer' 함수로 생성된 SVG 이미지를 base64 인코딩하여 데이터 URL로 만듬
 * 이 데이터 URL은 웹 페이지 내에서 이미지 소스로 직접 사용
 */
export const dataUrl = `data:image/svg+xml;base64,${toBase64(
  shimmer(1000, 1000)
)}`;

// GET IMAGE SIZE
export type AspectRatioKey = keyof typeof aspectRatioOptions;
export const getImageSize = (
  type: string,
  image: any,
  dimension: "width" | "height"
): number => {
  if (type === "fill") {
    return (
      aspectRatioOptions[image?.aspectRatio as AspectRatioKey]?.[dimension] ||
      1000
    );
  }
  return image?.[dimension] || 1000;
};

// DOWNLOAD IMAGE
export const download = (url: string, filename: string) => {
  if (!url) {
    throw new Error("Resource URL not provided! You need to provide one");
  }

  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;

      if (filename && filename.length)
        a.download = `${filename.replace(" ", "_")}.png`;
      document.body.appendChild(a);
      a.click();
    })
    .catch((error) => console.log({ error }));
};

// DEBOUNCE
/**
 * 주어진 함수를 지연시키는 디바운스 함수
 * 이 함수는 연속적인 호출을 감소시키고 일정 시간 동안의 마지막 호출만 처리합니다.
 *
 * @param {(...args: any[]) => void} func - 지연된 실행이 필요한 함수
 * @param {number} delay - 함수 실행 전에 기다려야 할 시간(밀리초)
 * @returns {(...args: any[]) => void} - 디바운스된 함수
 */
export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout | null;
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// DEEP MERGE OBJECTS
/**
 * 두 개의 객체를 깊게 병합
 *
 * @param {any} obj1 - 병합할 첫 번째 객체
 * @param {any} obj2 - 병합할 두 번째 객체
 * @returns {any} - 병합된 객체
 */
export const deepMergeObjects = (obj1: any, obj2: any) => {
  if (obj2 === null || obj2 === undefined) {
    return obj1;
  }

  // obj2를 기준으로 새로운 객체를 생성
  let output = { ...obj2 };

  // obj1의 속성을 순회하면서 병합을 수행
  for (let key in obj1) {
    // obj1의 속성을 직접적으로 소유한 경우에만 병합을 수행
    if (obj1.hasOwnProperty(key)) {
      // obj1의 현재 키에 대한 값이 객체이고, obj2에 같은 키가 있고 해당 값도 객체인 경우, 재귀적으로 병합
      if (
        obj1[key] &&
        typeof obj1[key] === "object" &&
        obj2[key] &&
        typeof obj2[key] === "object"
      ) {
        output[key] = deepMergeObjects(obj1[key], obj2[key]);
      } else {
        // 그렇지 않은 경우, obj1의 해당 키 값을 그대로 유지
        output[key] = obj1[key];
      }
    }
  }

  return output;
};

// FORM URL QUERY
export const formUrlQuery = ({
  searchParams,
  key,
  value,
}: FormUrlQueryParams) => {
  const params = { ...qs.parse(searchParams.toString()), [key]: value };

  return `${window.location.pathname}?${qs.stringify(params, {
    skipNulls: true,
  })}`;
};

// REMOVE KEY FROM QUERY
export function removeKeysFromQuery({
  searchParams,
  keysToRemove,
}: RemoveUrlQueryParams) {
  const currentUrl = qs.parse(searchParams);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  // Remove null or undefined values
  Object.keys(currentUrl).forEach(
    (key) => currentUrl[key] == null && delete currentUrl[key]
  );

  return `${window.location.pathname}?${qs.stringify(currentUrl)}`;
}

// Translate language
const languages = [
  { label: "Korea", value: "ko", src: "https://flagcdn.com/h60/kr.png" },
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  { label: "Japan", value: "ja", src: "https://flagcdn.com/h60/jp.png" },
  { label: "Chinese", value: "zh-CN", src: "https://flagcdn.com/h60/cn.png" },
];

const includedLanguages = languages.map((lang) => lang.value).join(",");

export function googleTranslateElementInit() {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "auto",
      includedLanguages,
    },
    "google_translate_element"
  );
}
