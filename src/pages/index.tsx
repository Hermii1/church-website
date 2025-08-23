import Head from 'next/head';

import Hero from '@/components/home/Hero';
import DailyQuote from '@/components/home/DailyQuote';
import Announcements from '@/components/home/Announcements';

export default function Home() {
  return (
   <>
      <Head>
        <title>Church of Shiloh  | Home</title>
        <meta name="description" content="Building stronger connections through worship" />
      </Head>

      <Hero />
      <DailyQuote />
      <Announcements />
    </>
  );
}