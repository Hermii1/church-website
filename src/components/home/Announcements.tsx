import { useState } from 'react';

export default function Announcements() {
  const [announcements] = useState([
    {
      id: 1,
      title: "Counseling and Prayer Hours",
      description: "Mondays and Tuesdays, 10:00 am-4:00 pm. Brother Fikire Getachew is available for counseling and prayer.",
      contact: "504-344-9479",
      date: "Ongoing"
    },
    {
      id: 2,
      title: "Weekly Bible Study",
      description: "Join us every Wednesday at 6:30 PM for our community Bible study session.",
      contact: "church@example.com",
      date: "Every Wednesday"
    },
    {
      id: 3,
      title: "Sunday Service",
      description: "Our main worship service takes place every Sunday at 10:00 AM. All are welcome!",
      contact: "",
      date: "Every Sunday"
    }
  ]);

  return (
    <section className="py-16 bg-church-black">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white">Announcements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="card-orange group hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-church-orange-light transition-colors">
                    {announcement.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{announcement.description}</p>
                </div>
                
                <div className="mt-auto">
                  {announcement.contact && (
                    <div className="mb-3">
                      <p className="text-sm text-gray-400">Contact:</p>
                      <a 
                        href={`tel:${announcement.contact}`}
                        className="text-church-orange-light hover:text-church-orange transition-colors font-medium"
                      >
                        {announcement.contact}
                      </a>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                    <span className="text-sm text-gray-400">{announcement.date}</span>
                    <button className="text-church-orange-light hover:text-church-orange text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special highlighted announcement as requested */}
        <div className="mt-12 max-w-4xl mx-auto bg-gray-800 p-6 rounded-xl border-l-4 border-church-orange">
          <h3 className="text-xl font-bold text-white mb-3">Counseling & Prayer Hours</h3>
          <p className="text-gray-300 mb-4">
            Mondays and Tuesdays, 10:00 am-4:00 pm. Brother Fikire Getachew is available for counseling and prayer.
          </p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-church-orange-light mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <a 
              href="tel:504-344-9479" 
              className="text-church-orange-light hover:text-church-orange font-medium transition-colors"
            >
              504-344-9479
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}