import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { eudoxusSans } from "./font";

// Site configuration
const siteConfig = {
  url: 'https://sire-orince.vercel.app',
  author: 'Sire Prince',

}

export const metadata = {
title: {
  default: 'Sire Prince | Full Stack Developer', 
  template: '%s | Sire Prince',
},
  description: 'A Web Developer specializing in modern web technologies. Building responsive, performant web applications',
  keywords: 'full stack developer, react, next.js, javascript, web development, portfolio',
  url: 'https://sire-portfolio.vercel.app' ,
  authors: [{ name: 'Sire Prince'}], 
  creator: "Sire Prince",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={eudoxusSans.variable}>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased min-h-screen">
        <Navbar />
             <main className="min-h-screen">
          {children}
        </main>
        
      </body>
    </html>
  )
}