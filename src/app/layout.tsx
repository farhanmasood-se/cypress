import React from 'react';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import db from '@/lib/supabase/db';
import { ThemeProvider } from '@/lib/providers/next-theme-provider';
import { twMerge } from 'tailwind-merge';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cypress',
  description:
    'Cypress is a powerful end-to-end note taking app that helps you collaborate with your team.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge('bg-background', dmSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
