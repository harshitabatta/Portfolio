import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshita Batta — Software Engineer",
  description:
    "Portfolio of Harshita Batta, Software Engineer specializing in Python, Django, backend engineering, distributed systems, and AI/ML. Explore my experience, projects, and technical work.",
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
