import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Church Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-church-orange-light">{t('footer.churchName')}</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.churchDescription')}
            </p>
            <p className="text-gray-400">
              123 Church Street<br />
              City, State 12345<br />
              Phone: (123) 456-7890
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-church-orange-light">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-church-orange-light transition-colors">{t('navigation.about')}</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-church-orange-light transition-colors">{t('navigation.events')}</Link></li>
              <li><Link href="/ministries" className="text-gray-400 hover:text-church-orange-light transition-colors">{t('navigation.ministries')}</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-church-orange-light transition-colors">{t('navigation.contact')}</Link></li>
            </ul>
          </div>
          
          {/* Service Times */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-church-orange-light">{t('footer.serviceTimes')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>{t('footer.sundayWorship')}:</span>
                <span>10:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.bibleStudy')}:</span>
                <span>Wed 6:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>{t('footer.prayerMeeting')}:</span>
                <span>Fri 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} {t('footer.churchName')}. {t('footer.rightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}