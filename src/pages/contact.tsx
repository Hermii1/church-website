import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Church Name</title>
        <meta name="description" content="Get in touch with Church Name" />
      </Head>

      <div className="min-h-screen bg-black py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Contact Us</h1>

          <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-300">Location</h3>
                <p className="text-gray-400">2001 Airline Dr, Metairie, LA 7000</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-300">Phone</h3>
                <p className="text-gray-400">(123) 456-7890</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-300">Email</h3>
                <p className="text-gray-400">info@churchname.org</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-300">Office Hours</h3>
              <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}