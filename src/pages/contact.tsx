import Head from 'next/head';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Shiloh Church</title>
        <meta name="description" content="Get in touch with Shiloh Church in Metairie, Louisiana" />
      </Head>

      <div className="min-h-screen bg-black py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">Contact Us</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information & Map */}
            <div className="space-y-8">
              <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-white">Visit Us</h2>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">Location</h3>
                    <p className="text-gray-400">2001 Airline Dr, Metairie, LA 70001</p>
                    <p className="text-gray-400 text-sm mt-1">Inside Celebration Church</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">Phone</h3>
                    <p className="text-gray-400">(504) 555-0123</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-300">Email</h3>
                    <p className="text-gray-400">info@shilohchurch.org</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-300">Office Hours</h3>
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-white">Find Us</h3>
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.023265036132!2d-90.16288872427657!3d29.97644197496626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620b1b63d2a5c5f%3A0x7d5c9c9b9b9b9b9b!2s2001%20Airline%20Dr%2C%20Metairie%2C%20LA%2070001!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shiloh Church Location"
                    className="w-full h-64 lg:h-80 rounded-lg"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="https://maps.google.com/?q=2001+Airline+Dr,+Metairie,+LA+70001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-church-orange-light hover:text-church-orange-dark transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-white">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-church-orange-light focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-church-orange-light focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-church-orange-light focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-church-orange-light focus:border-transparent resize-vertical"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-church-orange-light hover:bg-church-orange-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-church-orange-light focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}