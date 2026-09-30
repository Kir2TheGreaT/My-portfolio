"use client";

import { MotionConfig } from "framer-motion";

// Уважает системную настройку «уменьшить движение»: transform-анимации отключаются, opacity остаётся
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
