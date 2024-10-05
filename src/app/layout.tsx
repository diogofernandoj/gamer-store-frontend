import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Content from "../components/template/Content";
import { ProductsProvider } from "../data/contexts/ProductsContext";
import { CartProvider } from "../data/contexts/CartContext";
import { PaymentProvider } from "../data/contexts/PaymentContext";

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
        <ProductsProvider>
          <CartProvider>
            <PaymentProvider>
              <Content>{children}</Content>
            </PaymentProvider>
          </CartProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}
