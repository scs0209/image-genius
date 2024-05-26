"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { googleTranslateElementInit } from "@/lib/utils";
import { useCookies } from "react-cookie";
import LanguageModal from "./LanguageModal";
import { usePathname } from "next/navigation";

interface Props {
  languageModal?: boolean;
}

export default function GoogleTranslate({ languageModal }: Props) {
  const pathname = usePathname();
  const [_, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const onChange = (value: string) => {
    // 영어로 변경시 번역을 하지 않고 원본 페이지로 변경하기 위해 쿠키를 지운 후, 리로드를 해줌(화면에 바로 반영하기 위해)
    if (value === "en") {
      removeCookie("googtrans");
      window.location.reload();
      return;
    }

    // 그 외에는 언어 변경 시 쿠키를 통해 언어 코드를 확인하여 페이지 언어 번역
    const lang = "/en/" + value;
    // langCookieVar(lang);
    const element = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;
    if (element) {
      setCookie("googtrans", lang);
      element.value = value;
      element.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div id="google_translate_element">
      {pathname === "/" && <LanguageModal onChange={onChange} />}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}
