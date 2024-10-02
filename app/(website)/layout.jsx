import { Inter } from "next/font/google";
import ".././globals.css";
import { Providers } from "../providers";
import Navbar from "@/_components/Navbar"
import Footer from "@/_components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Renuka Trips Goa",
  description: "Renuka Trips Goa",
  icons: "/fav.jpg"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
