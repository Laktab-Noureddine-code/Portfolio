"use client";

import { LazyMotion, domAnimation } from "framer-motion";

// Loads only the DOM animation feature set (animate, exit, inView, hover/tap/
// focus) instead of the full framer-motion bundle. Combined with using `m.*`
// components everywhere, this trims the client JS without dropping any used
// behavior. domAnimation includes `inView`, so whileInView still works.
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
