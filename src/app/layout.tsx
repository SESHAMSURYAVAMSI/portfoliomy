'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Analytics from './components/Analytics';
import CustomCursor from './components/CustomCursor';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366f1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="UI/UX Designer Portfolio" />
        <meta property="og:description" content="Creative portfolio showcasing design work" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Analytics />
        {loading ? <Loader /> : (
          <>
            <CustomCursor />
            {children}
          </>
        )}
      </body>
    </html>
  );
}