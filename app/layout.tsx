import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CyberHUD from "./components/CyberHUD";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-orbitron" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["300", "500", "700"], variable: "--font-rajdhani" });

export const metadata: Metadata = {
  title: "Amir | Full Stack Engineer",
  description: "Senior Full Stack Engineer specializing in Scalable MERN Architectures and High-Performance Web Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${rajdhani.variable} font-sans antialiased bg-black text-white`}>
        <Navbar />
        <CyberHUD />
        {children}
      </body>
    </html>
  );
}
