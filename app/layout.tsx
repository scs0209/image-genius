import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import "./globals.css";
import FramerProvider from "@/components/shared/FramerProvider";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Image Genius",
  description: "AI-powered image generator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        id="google_translate_element"
        lang="en"
        suppressHydrationWarning={true}
      >
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          <FramerProvider>{children}</FramerProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
