import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function Ministries() {
  const { t } = useTranslation();

  const ministries = [
    {
      title: t('ministries.childrensMinistry'),
      description: t('ministries.childrensDesc'),
      schedule: t('ministries.sundaysDuringService'),
      contact: "children@shilohchurch.org"
    },
    {
      title: t('ministries.youthGroup'),
      description: t('ministries.youthGroupDesc'),
      schedule: t('ministries.fridays7pm'),
      contact: "youth@shilohchurch.org"
    },
    {
      title: t('ministries.mensFellowship'),
      description: t('ministries.mensFellowshipDesc'),
      schedule: t('ministries.firstSaturday'),
      contact: "mens@shilohchurch.org"
    },
    {
      title: t('ministries.womensCircle'),
      description: t('ministries.womensCircleDesc'),
      schedule: t('ministries.secondSaturday'),
      contact: "womens@shilohchurch.org"
    },
    {
      title: t('ministries.prayerWarriors'),
      description: t('ministries.prayerWarriorsDesc'),
      schedule: t('ministries.wednesdays630pm'),
      contact: "prayer@shilohchurch.org"
    },
    {
      title: t('ministries.outreachTeam'),
      description: t('ministries.outreachTeamDesc'),
      schedule: t('ministries.monthlyProjects'),
      contact: "outreach@shilohchurch.org"
    }
  ];

  return (
    <>
      <Head>
        <title>{t('ministries.title')} | Shiloh Church</title>
        <meta name="description" content={t('ministries.metaDescription')} />
      </Head>

      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-black">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">{t('ministries.heroTitle')}</h1>
          <p className="text-xl text-gray-300">{t('ministries.heroSubtitle')}</p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t('ministries.ourMinistries')}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          {t('ministries.ourMinistriesDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
          <div key={index} className="bg-white text-black rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold text-black mb-3">{ministry.title}</h3>
          <p className="text-gray-600 mb-4">{ministry.description}</p>

          <div className="space-y-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-church-orange mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-400">{ministry.schedule}</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-church-orange mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href={`mailto:${ministry.contact}`} className="text-church-orange hover:underline">
                {ministry.contact}
              </a>
            </div>
          </div>
          
          <button className="mt-4 bg-church-orange hover:bg-church-orange-light text-white font-medium py-2 px-4 rounded-lg transition-colors w-full">
            {t('common.learnMore')}
          </button>
        </div>
      ))}
     </div>
     </div>
     </section>

       {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">{t('ministries.getInvolvedTitle')}</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {t('ministries.getInvolvedDesc')}
        </p>
        <Link href="/contact">
          <button className="btn-primary">
          {t('common.contactUs')}
          </button>
        </Link>
        </div>
        </section>
    </> 
  );
}