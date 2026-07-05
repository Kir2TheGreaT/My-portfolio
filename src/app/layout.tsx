import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name | Frontend Developer - Serious Sam Portfolio",
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
    <html lang="en">
      <body className="vintage-grain">{children}</body>
    </html>
  );
}
