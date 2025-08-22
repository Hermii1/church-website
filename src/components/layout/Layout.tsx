import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../styles/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="layout">
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}