import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import PageTransition from "./components/PageTransition";
import Cursor from "./components/Cursor";

export const metadata: Metadata = {
  title: "Aelion — 未来都市国家の旅行ガイド",
  description: "2387年、海上に浮かぶ都市国家エリオンの公式観光ガイド",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full bg-black text-white cursor-none">
        <Cursor />
        <Nav />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}