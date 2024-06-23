'use client';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/common/Navbar';
import { StarsCanvas } from '@/components/common/StarsCanvas';

const inter = Inter({ subsets: ['latin'] });

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <StarsCanvas />
      </body>
    </html>
  );
}
