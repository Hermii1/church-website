import Head from 'next/head';
import Layout from '@/components/layout/Layout';

export default function Ministries() {
  const ministries = [
    {
      title: "Children's Ministry",
      description: "Engaging programs for children to learn about God's love through stories, games, and activities.",
      schedule: "Sundays during service",
      contact: "children@churchname.org"
    },
    {
      title: "Youth Group",
      description: "A dynamic community for teenagers to grow in faith, build relationships, and serve others.",
      schedule: "Fridays 7:00 PM",
      contact: "youth@churchname.org"
    },
    {
      title: "Men's Fellowship",
      description: "Brothers in Christ gathering for Bible study, accountability, and mutual encouragement.",
      schedule: "1st Saturday of each month",
      contact: "mens@churchname.org"
    },
    {
      title: "Women's Circle",
      description: "Sisters in faith meeting for prayer, study, and supporting one another through life's journeys.",
      schedule: "2nd Saturday of each month",
      contact: "womens@churchname.org"
    },
    {
      title: "Prayer Warriors",
      description: "Dedicated intercessors committed to praying for the church, community, and global needs.",
      schedule: "Wednesdays 6:30 PM",
      contact: "prayer@churchname.org"
    },
    {
      title: "Outreach Team",
      description: "Serving our local community through practical help and sharing God's love in action.",
      schedule: "Monthly service projects",
      contact: "outreach@churchname.org"
    }
  ];

  return (
    <>
      <Head>
        <title>Ministries | Church of Shiloh</title>
        <meta name="description" content="Explore our church ministries and find where you can serve" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-gray-100">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">CHURCH MINISTRIES</h1>
          <p className="text-xl text-gray-700">Find your place to serve and grow</p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Ministries</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer various ministries to help you connect, grow, and serve within our church community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{ministry.title}</h3>
                <p className="text-gray-700 mb-4">{ministry.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-church-orange mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{ministry.schedule}</span>
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
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Want to Get Involved?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We would love to help you find the perfect ministry where you can use your gifts and grow in faith.
          </p>
          <button className="bg-church-orange hover:bg-church-orange-light text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
}