import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/customUI/Navigation";
import { Box } from "@chakra-ui/react";
import { Provider } from "../components/ui/provider";
import { Josefin_Sans } from "next/font/google";

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
    <html lang="en">
      <body className={`antialiased p-4 ${josefin.className} `}>
        <Provider>
          <Navigation />
          <Box as="main">{children}</Box>
          <Box as="footer">Copyright &copy; 2025</Box>
        </Provider>
      </body>
    </html>
  );
}
