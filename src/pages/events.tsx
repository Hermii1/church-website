import Head from 'next/head';

import { useTranslation } from '@/hooks/useTranslation';

export default function Events() {
  const { t } = useTranslation();

  const upcomingEvents = [
    {
      title: t('events.sundayService'),
      date: t('events.everySunday'),
      time: "10:00 AM - 12:00 PM",
      location: t('events.mainSanctuary'),
      description: t('events.sundayServiceDesc')
    },
    {
      title: t('events.weeklyBibleStudy'),
      date: t('events.everyWednesday'),
      time: "7:00 PM - 8:30 PM",
      location: t('events.fellowshipHall'),
      description: t('events.bibleStudyDesc')
    },
    {
      title: t('events.monthlyPrayer'),
      date: t('events.firstFriday'),
      time: "7:00 PM - 9:00 PM",
      location: t('events.prayerRoom'),
      description: t('events.prayerNightDesc')
    },
    {
      title: t('events.communityOutreach'),
      date: "June 15, 2024",
      time: "9:00 AM - 2:00 PM",
      location: t('events.communityCenter'),
      description: t('events.outreachDesc')
    },
    {
      title: t('events.summerConference'),
      date: "July 20-22, 2024",
      time: t('events.allDay'),
      location: t('events.churchCampus'),
      description: t('events.conferenceDesc')
    },
    {
      title: t('events.youthCamp'),
      date: "August 5-9, 2024",
      time: t('events.allDay'),
      location: t('events.retreatCenter'),
      description: t('events.youthCampDesc')
    }
  ];

  return (
    <>
      <Head>
        <title>{t('events.title')} | Shiloh Church</title>
        <meta name="description" content={t('events.metaDescription')} />
      </Head>

      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-gray-100">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{t('events.heroTitle')}</h1>
          <p className="text-xl text-gray-700">{t('events.heroSubtitle')}</p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('events.upcomingEvents')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('events.upcomingDescription')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start">
                  {/* Date Box */}
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="bg-church-orange text-white text-center py-3 px-4 rounded-lg">
                      <p className="font-semibold">{event.date}</p>
                      <p className="text-sm">{event.time}</p>
                    </div>
                  </div>
                  
                  {/* Event Details */}
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-700 mb-3">{event.description}</p>
                    
                    <div className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    {t('events.addToCalendar')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Gatherings */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('events.regularGatherings')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('events.regularDescription')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('events.sundayServices')}</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>{t('events.worshipService')}</span>
                  <span className="text-church-orange font-medium">10:00 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>{t('events.sundaySchool')}</span>
                  <span className="text-church-orange font-medium">9:00 AM</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('events.weekdayActivities')}</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>{t('events.bibleStudy')}</span>
                  <span className="text-church-orange font-medium">{t('events.wed7pm')}</span>
                </li>
                <li className="flex justify-between">
                  <span>{t('events.prayerMeeting')}</span>
                  <span className="text-church-orange font-medium">{t('events.fri630pm')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}