import Head from 'next/head';
import Image from 'next/image';

import { useState } from 'react';

export default function About() {
  const [activeSection, setActiveSection] = useState('origin');

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

  return (
    <>
      <Head>
        <title>About Us | Church Name</title>
        <meta name="description" content="Learn about our origin, beliefs, vision, and mission" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gray-100">
  {/* Hero Background Image */}
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
  {/* Hero Text */}
  <div className="relative text-center px-4 z-10">
    <h1 className="text-4xl font-bold mb-4 text-gray-900">ABOUT US</h1>
    <p className="text-xl text-gray-700">Get to know our church family</p>
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
        Our Origin
      </button>
      <button
        onClick={() => setActiveSection('belief')}
        className={`btn-primary font-medium ${
          activeSection === 'belief' ? 'border border-church-orange' : ''
        }`}
      >
        Our Belief
      </button>
      <button
        onClick={() => setActiveSection('vision')}
        className={`btn-primary font-medium ${
          activeSection === 'vision' ? 'border border-church-orange' : ''
        }`}
      >
        Our Vision
      </button>
      <button
        onClick={() => setActiveSection('mission')}
        className={`btn-primary font-medium ${
          activeSection === 'mission' ? 'border border-church-orange' : ''
        }`}
      >
        Our Mission
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
              <h2 className="text-3xl font-bold mb-6 text-white-900">What is the Church?</h2>
              <div className="prose prose-lg text-white-700">
                <p className="mb-4">
                  The Church of Shiloh is a multilingual, gospel-believing congregation primarily serving the Ethiopian and Eritrean communities residing in the New Orleans metro area.
                </p>
                <p className="mb-4">
                  We are a congregation believing in the Bible as the inspired Word of God. For more details about our doctrine, refer to our Statement of Faith, which is provided in our Constitution.
                </p>
                <p>
                  The Church of Shiloh is situated in Metairie, Louisiana, inside the Celebration Church located at <strong>2001 Airline Dr, Metairie, LA 7000</strong>.
                </p>
              </div>
            </div>
          )}

          {/* Our Belief Section */}
          {activeSection === 'belief' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Belief</h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  We believe in the Bible as the inspired Word of God and hold to the following core doctrines:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>God is three persons in one Being: Father, Son, and Holy Spirit</li>
                  <li>Jesus Christ is the Son of God, born of the Virgin Mary, who died for our sins and rose again</li>
                  <li>Salvation is a gift of God through faith in Jesus Christ</li>
                  <li>The Church is a local assembly of believers gathering in mutual love for one another in Christ</li>
                  <li>Jesus Christ will return again to establish His eternal kingdom</li>
                </ul>
                <p>
                  For a complete statement of faith, please contact our church leadership.
                </p>
              </div>
            </div>
          )}

          {/* Our Vision Section */}
          {activeSection === 'vision' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
              <div className="prose prose-lg text-gray-700">
                <blockquote className="border-l-4 border-church-orange pl-4 italic mb-6 text-xl">
                  &quot;Let Lord Jesus Christ prepare and present us to Himself as a radiant church, free from stain or blemish, but holy and blameless.&quot; (Ephesians 5:27)
                </blockquote>
                <p>
                  Our vision is to be a church that reflects the glory and holiness of Christ, serving as a beacon of hope and truth in our community and beyond.
                </p>
              </div>
            </div>
          )}

          {/* Our Mission Section */}
          {activeSection === 'mission' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission: ተልእኮ</h2>
              <div className="prose prose-lg text-gray-700">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-church-orange font-bold mr-2 mt-1">•</span>
                    <span>Our mission is to share the Good News of the Lord Jesus Christ with the Eritrean and Ethiopian communities in New Orleans and beyond—across the United States and around the world.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-church-orange font-bold mr-2 mt-1">•</span>
                    <span>We aim to make faithful biblical disciples of Jesus Christ within the body of Christ. Our purpose is to exalt and worship God in spirit and truth, both individually and as we gather corporately.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-church-orange font-bold mr-2 mt-1">•</span>
                    <span>We also support the spread of the Gospel of the Lord Jesus Christ in our homelands of Eritrea and Ethiopia by sponsoring evangelists and helping local churches.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-church-orange font-bold mr-2 mt-1">•</span>
                    <span>We strive to be an epicenter where the hurting, desperate, and the lost can find love, hope, forgiveness, guidance, and encouragement.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-church-orange font-bold mr-2 mt-1">•</span>
                    <span>Additionally, we seek to equip individuals for spiritual maturity through Bible studies, small groups, and one-on-one mentoring.</span>
                  </li>
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
            <h2 className="text-orange-500 text-2xl font-semibold mb-2">Our Team</h2>
            <h3 className="text-4xl font-bold text-white">Leadership</h3>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-white-700 text-center mb-6">
              Our local church is governed by a Board of Elders elected by the congregation. The Board selects a leader, who is approved by the congregation, to manage the church&apos;s spiritual and administrative affairs.
            </p>
            <p className="text-white-700 font-semibold text-center">
              Contact the Church Leadership for any inquiries
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