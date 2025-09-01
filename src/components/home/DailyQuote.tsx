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
      text: "ለእናንተ የማስባትን አሳብ እኔ አውቃለሁ፤ ፍጻሜና ተስፋ እሰጣችሁ ዘንድ የሰላም አሳብ ነው እንጂ የክፉ ነገር አይደለም።",
      verse: "ኤርምያስ 29:11"
    },
    {
      text: "በፍጹም ልብህ በእግዚአብሔር ታመን፥ በራስህም ማስተዋል አትደገፍ፤",
      verse: "ምሳሌ 3:5"
    },
    {
      text: "ኃይልን በሚሰጠኝ በክርስቶስ ሁሉን እችላለሁ።",
      verse: "ፊልጵስዩስ 4:13"
    },
    {
      text: "እግዚአብሔር እረኛዬ ነው፥ የሚያሳጣኝም የለም።",
      verse: "መዝሙር 23:1"
    },
    {
      text: "ነገር ግን አስቀድማችሁ የእግዚአብሔርን መንግሥት ጽድቁንም ፈልጉ፥ ይህም ሁሉ ይጨመርላችኋል።",
      verse: "ማቴዎስ 6:33"
    }
  ],
  ti: [
    {
      text: "ኣኻትኩም ዘለኒ ሓሳብ ኣነ እፈልጦ እየ፤ ሰናይ ፍፃመን ተስፋን ክህበኩም፥ ናይ ሰላም ሓሳብ እምበር፥ ናይ ክፉእ ሓሳብ ኣይኮነን።",
      verse: "ኤርምያስ 29:11"
    },
    {
      text: "ብምሉእ ልብኻ ብእግዚኣብሄር እመን፤ ብናይ ባዕልኻ ምስትውዓልውን ኣይትተኣማመን፤",
      verse: "ምሳሌ 3:5"
    },
    {
      text: "በቲ ሓይሊ ዝህበኒ ክርስቶስ፥ ንዅሉ ኽገብሮ እኽእል እየ።",
      verse: "ፊልጵስዩስ 4:13"
    },
    {
      text: "እግዚአብሔር ጓሳይየይ እዩ፥ ዘስእነኒውን የለን።",
      verse: "መዝሙር 23:1"
    },
    {
      text: "ንስኻትኩም ግና፥ ኣቐዲምኩም መንግስቲ እግዚኣብሄርን ፅድቁን ደኣ ድለዩ፤ እዝ ዅሉ ድማ ኽውሰኸኩም እዩ።",
      verse: "ማቴዎስ 6:33"
    }
  ],
  om: [
    {
      text: "Yaada isinii qabu natu beeka; yaanni kunillee yaada hamaa uduu hin taane abdii yaada nagayaa mishaa ka isin eeggattan ka raawwatamu'uuf ta'u ka uf keessaa qabu.",
      verse: "Raajii Ermiyaasii 29:11"
    },
    {
      text: "Garaa kee guutu'uun Rabbiin abdadhu; hubannaa keetitti hin irkatin.",
      verse: "Mammaakaa 3:5"
    },
    {
      text: "Huminna ka naa kennu Kristosiin waan maraa raawwachu'uuf, ni dandda'a.",
      verse: "Filiphisiiyusii 4:13"
    },
    {
      text: "Gooftaan kiyya fayyaa koo; homaa hin hiyyoomne.",
      verse: "Waamaa 23:1"
    },
    {
      text: "Isin garuu, durssa'aatii Mootummaa Waaqaatii fi qulqullaayoma isaa'llee barbaadaa, wonitti hafe marrinuu isiniif ni dabalama.",
      verse: "Wongeela Maatewos 6:33"
    }
  ]
};

export default function DailyQuote() {
  const {t, language} = useTranslation();
  const [quote, setQuote] = useState(bibleQuotes.en[0]);

  // Update quote when language changes
  useEffect(() => {
    const quotes = bibleQuotes[language] || bibleQuotes.en;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, [language]); // Added language as dependency

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