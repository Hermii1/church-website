import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';

export default function About() {
  const [activeSection, setActiveSection] = useState('origin');
  const { t } = useTranslation();

  const leadership = [
    {
      name: "Fikire Getachew",
      role: "Leader",
      phone: "504-344-9479",
      email: "Fikirgetachew@gmail.com",
      image: "/images/leadership/fikire.jpg"
    },
    {
      name: "Tesfaye Mengesha",
      role: "Chair of Elders",
      phone: "504-281-0859",
      email: "tesfayemengesha950@gmail.com",
      image: "/images/leadership/tesfaye.jpg"
    },
    {
      name: "Dr. Abel Gelan",
      role: "Media and Communications",
      phone: "504-478-8205",
      email: "agelan@tulane.edu",
      image: "/images/leadership/abel.jpg"
    }
  ];

  // Create arrays from individual translation keys
  const beliefItems = [
    t('about.belief1'),
    t('about.belief2'),
    t('about.belief3'),
    t('about.belief4'),
    t('about.belief5')
  ];

  const missionItems = [
    t('about.mission1'),
    t('about.mission2'),
    t('about.mission3'),
    t('about.mission4'),
    t('about.mission5')
  ];

  return (
    <>
      <Head>
        <title>{t('about.title')}</title>
        <meta name="description" content={t('about.description')} />
      </Head>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gray-100">
        <div className="absolute inset-0 w-full h-full min-h-[384px]">
          <Image
            src="/images/hero/about-hero.jpg"
            alt="About Us Hero"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative text-center px-4 z-10">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{t('about.heroTitle')}</h1>
          <p className="text-xl text-gray-700">{t('about.heroSubtitle')}</p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <button
              onClick={() => setActiveSection('origin')}
              className={`btn-primary font-medium ${
                activeSection === 'origin' ? 'border border-church-orange' : ''
              }`}
            >
              {t('about.origin')}
            </button>
            <button
              onClick={() => setActiveSection('belief')}
              className={`btn-primary font-medium ${
                activeSection === 'belief' ? 'border border-church-orange' : ''
              }`}
            >
              {t('about.belief')}
            </button>
            <button
              onClick={() => setActiveSection('vision')}
              className={`btn-primary font-medium ${
                activeSection === 'vision' ? 'border border-church-orange' : ''
              }`}
            >
              {t('about.vision')}
            </button>
            <button
              onClick={() => setActiveSection('mission')}
              className={`btn-primary font-medium ${
                activeSection === 'mission' ? 'border border-church-orange' : ''
              }`}
            >
              {t('about.mission')}
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          
          {/* Our Origin Section */}
          {activeSection === 'origin' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">{t('about.whatIsChurch')}</h2>
              <div className="prose prose-lg text-white">
                <p className="mb-4">
                  {t('about.originText1')}
                </p>
                <p className="mb-4">
                  {t('about.originText2')}
                </p>
                <p>
                  {t('about.originText3')} <strong>2001 Airline Dr, Metairie, LA 7000</strong>.
                </p>
              </div>
            </div>
          )}

          {/* Our Belief Section */}
          {activeSection === 'belief' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">{t('about.beliefTitle')}</h2>
              <div className="prose prose-lg text-white">
                <p className="mb-4">
                  {t('about.beliefText1')}
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  {beliefItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>
                  {t('about.beliefText2')}
                </p>
              </div>
            </div>
          )}

          {/* Our Vision Section */}
          {activeSection === 'vision' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">{t('about.visionTitle')}</h2>
              <div className="prose prose-lg text-white">
                <blockquote className="border-l-4 border-church-orange pl-4 italic mb-6 text-xl">
                  {t('about.visionQuote')}
                </blockquote>
                <p>
                  {t('about.visionText')}
                </p>
              </div>
            </div>
          )}

          {/* Our Mission Section */}
          {activeSection === 'mission' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">{t('about.missionTitle')}</h2>
              <div className="prose prose-lg text-white">
                <ul className="space-y-4">
                  {missionItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-church-orange font-bold mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-orange-500 text-2xl font-semibold mb-2">{t('about.leadershipTitle')}</h2>
            <h3 className="text-4xl font-bold text-white">{t('about.leadershipSubtitle')}</h3>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-white text-center mb-6">
              {t('about.leadershipText1')}
            </p>
            <p className="text-white font-semibold text-center">
              {t('about.leadershipText2')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 relative">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-church-orange font-semibold mb-4">{leader.role}</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <a href={`tel:${leader.phone}`} className="text-gray-700 hover:text-church-orange transition-colors">
                        {leader.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a href={`mailto:${leader.email}`} className="text-gray-700 hover:text-church-orange transition-colors break-all">
                        {leader.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}