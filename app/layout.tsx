import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/header";

export const metadata: Metadata = {
  title: { template: "%s | Snapstay", default: "Welcome Snapstay" },
  description: "Snapstay - Welcome to paradise",
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={josefin.className}>
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-13 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
