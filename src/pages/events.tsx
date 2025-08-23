import Head from 'next/head';
import Layout from '@/components/layout/Layout';

export default function Events() {
  const upcomingEvents = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "10:00 AM - 12:00 PM",
      location: "Main Sanctuary",
      description: "Join us for our weekly worship service with preaching, prayer, and fellowship."
    },
    {
      title: "Weekly Bible Study",
      date: "Every Wednesday",
      time: "7:00 PM - 8:30 PM",
      location: "Fellowship Hall",
      description: "Deep dive into God's Word with our community Bible study session."
    },
    {
      title: "Monthly Prayer Night",
      date: "First Friday of each month",
      time: "7:00 PM - 9:00 PM",
      location: "Prayer Room",
      description: "Corporate prayer gathering for church needs, community, and nations."
    },
    {
      title: "Community Outreach",
      date: "June 15, 2024",
      time: "9:00 AM - 2:00 PM",
      location: "Local Community Center",
      description: "Serving our community through practical help and sharing God's love."
    },
    {
      title: "Summer Conference",
      date: "July 20-22, 2024",
      time: "All Day",
      location: "Church Campus",
      description: "Annual summer conference with guest speakers, worship, and fellowship."
    },
    {
      title: "Youth Camp",
      date: "August 5-9, 2024",
      time: "All Day",
      location: "Retreat Center",
      description: "Summer camp for youth with activities, teachings, and spiritual growth."
    }
  ];

  return (
    <>
      <Head>
        <title>Events | Church Name</title>
        <meta name="description" content="Upcoming events and activities at our church" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-gray-100">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">CHURCH EVENTS</h1>
          <p className="text-xl text-gray-700">Join us for worship, fellowship, and service</p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check out our calendar of events and mark your dates to join us!
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
                    Add to Calendar
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regular Gatherings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our weekly schedule of services and activities
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sunday Services</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Worship Service</span>
                  <span className="text-church-orange font-medium">10:00 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday School</span>
                  <span className="text-church-orange font-medium">9:00 AM</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Weekday Activities</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Bible Study</span>
                  <span className="text-church-orange font-medium">Wed 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Prayer Meeting</span>
                  <span className="text-church-orange font-medium">Fri 6:30 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}