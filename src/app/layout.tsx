import {ReactNode} from "react";
import {AuthProvider} from "./Providers";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export interface RootLayoutProps {
  children: ReactNode;
}
export const metadata = {
  title: "RideFleet ",
  description: "Rent and Travel",
};

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <AuthProvider>
          <Navbar />
          {children}{" "}
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
