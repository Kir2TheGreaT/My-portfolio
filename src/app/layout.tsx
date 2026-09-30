import type { Metadata } from "next";
import { Exo_2, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Exo_2({
  subsets: ["latin", "cyrillic"],
  variable: "--face-display",
});
const body = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--face-body",
});
const code = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--face-code",
});

export const metadata: Metadata = {
  title: "Kirill | Frontend Developer - Serious Sam Portfolio",
  description:
    "Frontend developer specializing in React and Next.js. Check out my portfolio of web development projects.",
  keywords: [
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Developer",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${display.variable} ${body.variable} ${code.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
