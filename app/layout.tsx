import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "../components/global/Container";
import Providers from "@/app/providers";
import {ClerkProvider} from "@clerk/nextjs";

import { Inter } from 'next/font/google';

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

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Next Storefront",
  description: "A nifty Next.js storefront",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <ClerkProvider>
          <html lang='en' suppressHydrationWarning>
          <body className={inter.className}>
          <Providers>
              <Navbar />
              <Container className='py-20'>{children}</Container>
          </Providers>
          </body>
          </html>
      </ClerkProvider>

  );
}
