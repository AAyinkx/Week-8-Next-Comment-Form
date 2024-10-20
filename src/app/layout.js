import "./globals.css";
import { Ribeye_Marrow, Sue_Ellen_Francisco } from "next/font/google";
import Script from "next/script";
import Navbar from "@/Components/Navbar";
import Header from "@/Components/Header";

const ribeye_marrow = Ribeye_Marrow({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
export const sue_ellen = Sue_Ellen_Francisco({
  weight: "400",
  size: "25px",
  subsets: ["latin"],
});
export const metadata = {
  title: "The Book Nook 2.0",
  description: "Enter a world full of books",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${
          sue_ellen.className
        } ${"bg-cover bg-center text-center mb-4"}`}
      >
        <Script
          src="https://kit.fontawesome.com/5d4d1c054f.js"
          crossOrigin="anonymous"
        ></Script>
        <Navbar />
        <Header styles={`text-6xl ${ribeye_marrow.className}`} />
        {children}
      </body>
    </html>
  );
}
