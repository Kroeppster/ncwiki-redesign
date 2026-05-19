import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'NCWiki Redesign',
  description: 'Modernes Lernportal zur Vorbereitung auf die Schweizer medizinische Prüfung.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
