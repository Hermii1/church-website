import Head from 'next/head';
import Layout from '@/components/layout/Layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Us | Church Name</title>
        <meta name="description" content="Get in touch with Church Name" />
      </Head>

      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Contact Us</h1>
          
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get In Touch</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Location</h3>
                <p className="text-gray-600">2001 Airline Dr, Metairie, LA 7000</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700">Phone</h3>
                <p className="text-gray-600">(123) 456-7890</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700">Email</h3>
                <p className="text-gray-600">info@churchname.org</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}