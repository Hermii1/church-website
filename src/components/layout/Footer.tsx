// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Church of Shiloh</h3>
            <p className="mb-2">2001 Airline Dr, Metairie, LA 7000</p>
            <p>Inside Celebration Church</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-secondary-400 transition">About Us</a></li>
              <li><a href="#beliefs" className="hover:text-secondary-400 transition">Our Beliefs</a></li>
              <li><a href="#services" className="hover:text-secondary-400 transition">Service Times</a></li>
              <li><a href="#ministries" className="hover:text-secondary-400 transition">Ministries</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Email: info@churchofshiloh.com</p>
            <p className="mb-4">Phone: (504) 344-9479</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary-400 transition">Facebook</a>
              <a href="#" className="hover:text-secondary-400 transition">YouTube</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Church of Shiloh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}