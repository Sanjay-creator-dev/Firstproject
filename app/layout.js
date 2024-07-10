import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./Components/menu/Menu"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mmnetherland",
  description: "by sanjay prajapati",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}><Menu/>{children}</body>
    </html>
  );
}
