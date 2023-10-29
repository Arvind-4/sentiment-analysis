import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@src/app/globals.css';
import Header from '@src/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Predictor',
  description: 'Predictor',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}

export default RootLayout;
