import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Poppins } from 'next/font/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff", 
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body
          className={`${poppins.className} antialiased `}
        >
          <div className="min-h-screen p-0">
            <div className="max-w-full px-10 mx-auto">
              <Navbar />
              {children}
            </div>
          </div>
        </body>
      </html>
    );
}
