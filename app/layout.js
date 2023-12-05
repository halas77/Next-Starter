"use client"

import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <body>{children}</body>
    </ThemeProvider>
  );
}
