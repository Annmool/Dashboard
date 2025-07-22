import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SecureSight Dashboard",
  description: "CCTV Incident Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}