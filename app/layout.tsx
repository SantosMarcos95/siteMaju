import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advocacia & Consultoria Jurídica",
  description: "Advocacia especializada em direito de família",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
