
import Header from './Header';
import Footer from './Footer';
import '../../styles/globals.css';
interface LayoutProps {
  children: React.ReactNode; // Use React.ReactNode directly
}

export default function Layout({ children }: LayoutProps) {
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