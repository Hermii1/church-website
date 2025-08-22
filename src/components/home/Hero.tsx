import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  '/images/hero/hero1.jpg',
  '/images/hero/hero2.jpg',
  '/images/hero/hero3.jpg',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 240000); // 4 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt="Church worship"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          Building stronger connections through worship
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Experience unity and faith as we come together in worship strengthening our bond with God and one another in love and grace.
        </p>
        <button className="btn-primary">
          Join Church
        </button>
      </div>
    </section>
  );
}