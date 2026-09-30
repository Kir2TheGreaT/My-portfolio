import type { Metadata } from "next";
import { Oswald, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Oswald({
  subsets: ["latin", "cyrillic"],
  variable: "--face-display",
});
const body = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--face-body",
});
const code = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
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
