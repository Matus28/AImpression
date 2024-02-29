import type { Metadata } from "next";
import { IBM_Plex_Sans as IBMPlexSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const IBMPlex = IBMPlexSans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "AImpression",
  description: "Generate image using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>{children}</body>
    </html>
  );
}
