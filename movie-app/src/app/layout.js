'use client'
import { Inter } from "next/font/google";
import { MoviesProvider } from "./contexts/MoviesContext";
import './styles/globals.scss'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <MoviesProvider>
          {children}
        </MoviesProvider>
      </body>
    </html>
  );
}
