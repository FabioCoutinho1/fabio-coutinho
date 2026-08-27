"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvaider } from "next-themes";

export default function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemeProvaider>) {
  return <NextThemeProvaider {...props}>{children}</NextThemeProvaider>;
}
