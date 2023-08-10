import './globals.css';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

const inter = Nunito_Sans({
  weight: ['300', '600', '800'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Where in the world?',
  description: 'World countries',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
