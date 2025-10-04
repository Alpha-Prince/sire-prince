// import type { Metadata } from "next";
// import "./globals.css";
// import './globals.css';
// import { zenDots, voltaire, sora } from './fonts';



// export const metadata: Metadata = {
//   title: "Sire Portfolio App",
//   description: "Sire Generated Portfolio created with next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${zenDots.variable} ${voltaire.variable} ${sora.variable}  antialiased`}
// >
//         {children}
//       </body>
//     </html>
//   );
// }
// app/layout.js
import type { Metadata } from "next";
import "./globals.css";
import { zenDots, voltaire, sora } from './fonts';
import Navbar from './components/Navbar'; // Adjust path as needed

export const metadata: Metadata = {
  title: "Sire Portfolio App",
  description: "Sire Generated Portfolio created with next app",
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
        {/* Add Navbar here - it will show on ALL pages */}
        <Navbar />
        
        {/* Add padding to main content to account for fixed navbar */}
        <main className="pt-20 md:pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}