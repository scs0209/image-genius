// ===== GOOGLE TRANSLATE
declare global {
  interface Window {
    google: typeof google;
    googleTranslateElementInit?: () => void;
  }
}

export {};
