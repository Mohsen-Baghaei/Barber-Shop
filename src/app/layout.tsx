import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Barber Shop",
  description: "Barber Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen flex flex-col justify-start items-center">
        <Header />
        {children}
      </body>
    </html>
  );
}
