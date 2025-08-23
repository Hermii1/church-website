import Head from 'next/head';

import Hero from '@/components/home/Hero';
import DailyQuote from '@/components/home/DailyQuote';
import Announcements from '@/components/home/Announcements';
import { useTranslation } from '@/hooks/useTranslation';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Church Name | {t('navigation.home')}</title>
        <meta name="description" content={t('home.welcome')} />
      </Head>

      <Hero />
      <DailyQuote />
      <Announcements />
    </>
  );
}