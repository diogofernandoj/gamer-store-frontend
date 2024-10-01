import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Content from "../components/template/Content";

const font = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gamer Store",
  description: "Ecommerce de periféricos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <Content>{children}</Content>
      </body>
    </html>
  );
}
