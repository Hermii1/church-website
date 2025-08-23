import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { useState } from 'react';
import Link from 'next/link';

export default function Programs() {
  const [activeDay, setActiveDay] = useState('all');

  const gatherings = [
    {
      day: 'Monday',
      events: [
        {
          time: '10:00 AM – 4:30 PM CST',
          title: 'Counseling and Prayer',
          description: 'Brother Fikire Getachew is available for counseling and prayer.',
          contact: '504-344-9479',
          location: 'Church Office'
        }
      ]
    },
    {
      day: 'Tuesday',
      events: [
        {
          time: '10:00 AM – 4:30 PM CST',
          title: 'Counseling and Prayer',
          description: 'Brother Fikire Getachew is available for counseling and prayer.',
          contact: '504-344-9479',
          location: 'Church Office'
        },
        {
          time: '9:00 PM - 10:00 PM CST',
          title: 'Evening Prayer',
          description: 'Join us for our weekly evening prayer session.',
          location: 'Main Sanctuary'
        }
      ]
    },
    {
      day: 'Wednesday',
      events: [
        {
          time: '7:00 AM - 1:00 PM CST',
          title: 'Chain Prayer and Fasting',
          description: 'Participate in our chain prayer and fasting throughout the morning.',
          location: 'Main Sanctuary'
        },
        {
          time: '7:00 PM - 8:00 PM CST',
          title: 'Bible Marathon',
          description: 'Covering the books of Genesis to Revelation.',
          location: 'Main Sanctuary'
        }
      ]
    },
    {
      day: 'Thursday',
      events: [
        {
          time: '7:30 PM - 9:30 PM CST',
          title: 'Bible Study',
          description: 'Join us for Bible study at two locations.',
          location: 'Metairie and Westbank'
        }
      ]
    },
    {
      day: 'Sunday',
      events: [
        {
          time: '9:00 AM - 10:00 AM CST',
          title: 'Morning Prayer',
          description: 'Preparatory prayer time before service.',
          location: 'Main Sanctuary'
        },
        {
          time: '10:00 AM - 12:00 PM CST',
          title: 'Worship Service',
          description: 'Worship service and preaching, conducted in Amharic, Tigrigna, and Afan Oromo.',
          location: 'Main Sanctuary'
        },
        {
          time: '10:30 AM - 12:00 PM CST',
          title: "Children&apos;s Sunday School",
          description: 'Sunday school service for children.',
          location: 'Children&apos;s Wing'
        }
      ]
    },
    {
      day: 'Special',
      events: [
        {
          time: 'First Sunday of each month: 10:00 AM - 1:30 PM CST',
          title: 'Fasting, Prayer, and Fellowship',
          description: 'Monthly day of fasting, prayer, and fellowship.',
          location: 'Main Sanctuary'
        },
        {
          time: 'Biannual',
          title: 'Annual Conferences',
          description: 'We hold biannual conferences, one around Christmas and another in the summer.',
          location: 'Main Sanctuary'
        }
      ]
    }
  ];

  const days = ['all', 'monday', 'tuesday', 'wednesday', 'thursday', 'sunday', 'special'];

  const filteredGatherings = activeDay === 'all' 
    ? gatherings 
    : gatherings.filter(g => g.day.toLowerCase() === activeDay);

  return (
    <>
      <Head>
        <title>Services & Gatherings | Church Name</title>
        <meta name="description" content="Join us for spiritual activities and fellowship" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-gray-100">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">REGULAR GATHERINGS</h1>
          <p className="text-xl text-gray-700">Please join us for these spiritual activities and fellowship!</p>
        </div>
      </section>

      {/* Day Filter */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {days.map(day => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeDay === day 
                    ? 'bg-church-orange text-white border border-church-orange'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {day === 'all' ? 'All Days' : day.charAt(0).toUpperCase() + day.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gatherings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredGatherings.map(daySchedule => (
              <div key={daySchedule.day} className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-church-orange-light pb-2">
                  {daySchedule.day}
                </h2>
                
                <div className="space-y-6">
                  {daySchedule.events.map((event, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-start">
                        <div className="md:w-1/4 mb-4 md:mb-0">
                          <div className="bg-church-orange-light text-black py-2 px-4 rounded-lg text-center">
                            <p className="font-semibold">{event.time}</p>
                          </div>
                        </div>
                        
                        <div className="md:w-3/4">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                          <p className="text-gray-700 mb-3">{event.description}</p>
                          
                          <div className="flex flex-wrap gap-4">
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-church-orange mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600">{event.location}</span>
                            </div>
                            
                            {event.contact && (
                              <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-church-orange mr-2" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <a href={`tel:${event.contact}`} className="text-black hover:underline">
                                  {event.contact}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto mt-12 bg-church-orange-light/10 rounded-xl p-6 border border-church-orange-light">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Important Notes</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-church-orange font-bold mr-2 mt-1">•</span>
                <span>All services are open to everyone. Visitors are always welcome!</span>
              </li>
              <li className="flex items-start">
                <span className="text-church-orange font-bold mr-2 mt-1">•</span>
                <span>For directions to our Metairie and Westbank locations, please contact the church office.</span>
              </li>
              <li className="flex items-start">
                <span className="text-church-orange font-bold mr-2 mt-1">•</span>
                <span>Children&apos;s Sunday School runs concurrently with our main worship service.</span>
              </li>
              <li className="flex items-start">
                <span className="text-church-orange font-bold mr-2 mt-1">•</span>
                <span>For more information about our biannual conferences, please check our events page or contact church leadership.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Join Us This Week</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We&apos;d love to have you join us for worship, prayer, and fellowship. Experience the warmth of our church community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-church-orange hover:bg-church-orange-light text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get Directions
            </button>
            <Link href="/contact" passHref>
              <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}