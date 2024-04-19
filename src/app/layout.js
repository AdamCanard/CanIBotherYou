import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Fabio = localFont({ src: "./Fabio.ttf", variable: "--fabio" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Fabio.className}>{children}</body>
    </html>
  );
}
