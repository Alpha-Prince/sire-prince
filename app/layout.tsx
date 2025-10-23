import type { Metadata } from "next";
import "./globals.css";
import { zenDots, voltaire, sora } from './fonts';
import Navbar from './components/Navbar'; // Adjust path as needed

export const metadata: Metadata = {
  title: "Sire Portfolio App",
  description: "Sire Prince Portfolio Website | Sire Portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${zenDots.variable} ${voltaire.variable} ${sora.variable} antialiased scroll-smooth`}
      >
        <Navbar />
        
        <main className="pt-20 md:pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}