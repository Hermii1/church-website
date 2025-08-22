import { useState, useEffect } from 'react';

const bibleQuotes = [
  {
    text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
    verse: "Jeremiah 29:11"
  },
  {
    text: "Trust in the Lord with all your heart, and do not lean on your own understanding.",
    verse: "Proverbs 3:5"
  },
  {
    text: "I can do all things through him who strengthens me.",
    verse: "Philippians 4:13"
  },
  {
    text: "The Lord is my shepherd; I shall not want.",
    verse: "Psalm 23:1"
  },
  {
    text: "But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
    verse: "Matthew 6:33"
  }
];

export default function DailyQuote() {
  const [quote, setQuote] = useState(bibleQuotes[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * bibleQuotes.length);
    setQuote(bibleQuotes[randomIndex]);
  }, []);

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Daily Inspiration</h2>
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-xl italic mb-4">
            &quot;{quote.text}&quot;
          </blockquote>
          <p className="text-church-orange-light font-semibold">
            {quote.verse}
          </p>
        </div>
      </div>
    </section>
  );
}