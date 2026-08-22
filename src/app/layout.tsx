import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshita Batta — Software Engineer",
  description:
    "Portfolio of Harshita Batta, Software Engineer focused on backend engineering, distributed systems, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
