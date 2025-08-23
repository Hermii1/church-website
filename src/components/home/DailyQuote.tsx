import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

// Separate quotes for each language
const bibleQuotes = {
  en: [
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
  ],
  am: [
    {
      text: "እግዚአብሔር የሚያደርግላችሁን እቅድ አውቃለሁና፥ እርሱ ደግም ነው፥ ሥጋትም አይደለም፥ ወደፊትም ተስፋ ይሰጣችኋል።",
      verse: "ኤርምያስ 29:11"
    },
    {
      text: "በልብህ ሁሉ በእግዚአብሔር ላይ ግጠም፥ በእውቀትህም ላይ አትመካ።",
      verse: "ምሳሌ 3:5"
    },
    {
      text: "እኔ የምችለውን ሁሉ የሚያበረታኝ በክርስቶስ ነው።",
      verse: "ፊልጵስዩስ 4:13"
    },
    {
      text: "እግዚአብሔር እረኛዬ ነው፥ ምንም አልጎድልም።",
      verse: "መዝሙር 23:1"
    },
    {
      text: "ነገር ግን መጀመርያ የእግዚአብሔርን መንግሥት እና ፍትሁን ፈልጉ፥ ይህም ሁሉ ይጨመርላችኋል።",
      verse: "ማቴዎስ 6:33"
    }
  ],
  ti: [
    {
      text: "ኣነ እፈልግ እየ ንዕኻትኩም ዘሎኒ መደብ እፈልግ እየ፡ ሕማቕ ኣይኮነን፡ ግን ሰላምን ተስፋን እዩ።",
      verse: "ኤርምያስ 29:11"
    },
    {
      text: "ብልብኻ ዅሉ ኣብ እግዚአብሔር ተጸግዕ፡ ብፍልጠትኻ ግና ኣይትጽግዕ።",
      verse: "ምሳሌ 3:5"
    },
    {
      text: "ኵሉ ነገር በዚ ዘደግፈኒ ኣብ ክርስቶስ እተጻወር።",
      verse: "ፊልጵስዩስ 4:13"
    },
    {
      text: "እግዚአብሔር እረኣይየ እዩ፥ ኣየድልየን እየ።",
      verse: "መዝሙር 23:1"
    },
    {
      text: "ነገር ግን ቀዳምነት ስልጣን እግዚአብሔርን ፍትሕኡን ድለዩ፥ እዚ ኸኣ ኵሉ ይውሃበኩም።",
      verse: "ማቴዎስ 6:33"
    }
  ],
  om: [
    {
      text: "Ani Waaqayyo akka tasaa, sodaa hin taane, fuula duraafi kajeelaa ta'uu beeka.",
      verse: "Yeremayaas 29:11"
    },
    {
      text: "Waaqayyo irratti hunda ofii gadi dhiisi, beekumsa kee irratti hin hirkanjin.",
      verse: "Mammaaksa 3:5"
    },
    {
      text: "Waan hunda kan na dandeessise Kiristosittiin nan danda'a.",
      verse: "Filiphisiyoos 4:13"
    },
    {
      text: "Gooftaan kiyya fayyaa koo; homaa hin hiyyoomne.",
      verse: "Waamaa 23:1"
    },
    {
      text: "Fuula duraa mootummaa Waaqayyoo fi sirna isaa barbaadaa, wantoonni kanaas hundi isinirraa dabalamti.",
      verse: "Mataa 6:33"
    }
  ]
};

export default function DailyQuote() {
  const { t, language } = useTranslation(); // <-- add t here
  const [quote, setQuote] = useState(bibleQuotes.en[0]);

  useEffect(() => {
    const quotes = bibleQuotes[language] || bibleQuotes.en;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, [language]);

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
          {t('home.dailyQuote')}
        </h2>
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-xl italic mb-4 text-white">
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