'use client'

import { Inter } from "next/font/google";
import "./styles/globals.css";
import { ProductsProvider } from "./contexts/ProductsContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductsProvider>
          {children}
        </ProductsProvider>
      </body>
    </html>
  );
}
