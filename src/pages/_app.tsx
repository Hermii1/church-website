import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import type { AppProps } from 'next/app';
import { LanguageProvider } from '@/Context/LanguageContext'
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </LanguageProvider>

  );
}