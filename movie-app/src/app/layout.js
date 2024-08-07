'use client'
import { Inter } from "next/font/google";
import { MoviesProvider } from "./contexts/MoviesContext";
import { AuthProvider } from "./contexts/AuthContext";
import './styles/globals.scss'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <MoviesProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </MoviesProvider>
      </body>
    </html>
  );
}
