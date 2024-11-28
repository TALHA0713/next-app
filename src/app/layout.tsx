// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'My Website',
  description: 'A beautiful Next.js website with Tailwind CSS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
    <body className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto my-8">{children}</main>
      <Footer />
    </body>
  </html>
  );
}
  