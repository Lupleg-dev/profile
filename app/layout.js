import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mark Sikaundi - SE profile",
  description: "I am a passionate Software Engineer with over 5 years of experience in building web applications. I have a strong background in JavaScript, React, Node.js, and various databases. I am always eager to learn new technologies and tackle challenging projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
