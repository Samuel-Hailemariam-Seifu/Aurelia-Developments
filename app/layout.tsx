import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AURELIA DEVELOPMENTS | Architecting Landmark Living",
  description: "Luxury residential towers and commercial developments. Investment-grade property in the world's most prestigious locations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
