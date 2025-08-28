// src/utils/bibleApi.ts

export interface BibleVerse {
  book: string;
  chapter: number;
  verseNum: string;
  verse: string;
  version?: string;
}

export interface BibleApiResponse {
  status: number;
  message: string;
  version: string;
  data: BibleVerse;
}

export const fetchSingleVerse = async (
  version: string = 'kjv',
  bookId: string = 'PSA',
  chapter: number = 23,
  verseNum: number = 1
): Promise<BibleVerse | null> => {
  const maxRetries = 3;
  let retries = 0;
  
  while (retries < maxRetries) {
    try {
      console.log(`Fetching: https://bible-api-kappa.vercel.app/api/v1/verses/${version}/${bookId}/${chapter}/${verseNum}`);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch(
        `https://bible-api-kappa.vercel.app/api/v1/verses/${version}/${bookId}/${chapter}/${verseNum}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          signal: controller.signal
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: BibleApiResponse = await response.json();
      
      if (data.status === 200 && data.data) {
        return {
          ...data.data,
          version: data.version
        };
      } else {
        throw new Error(data.message || 'Failed to fetch verse');
      }

    } catch (error) {
      retries++;
      console.error(`Attempt ${retries} failed:`, error);
      
      if (retries === maxRetries) {
        console.error('All fetch attempts failed');
        return null;
      }
      
      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, 1000 * retries));
    }
  }
  
  return null;
};

// Helper function to get a random verse
export const getRandomVerse = async (): Promise<BibleVerse | null> => {
  // You can define popular verses or use a predefined list
  const popularVerses = [
    { version: 'kjv', bookId: 'JHN', chapter: 3, verseNum: 16 },
    { version: 'kjv', bookId: 'PSA', chapter: 23, verseNum: 1 },
    { version: 'kjv', bookId: 'ROM', chapter: 8, verseNum: 28 },
    { version: 'kjv', bookId: 'PHP', chapter: 4, verseNum: 13 },
    { version: 'kjv', bookId: 'ISA', chapter: 40, verseNum: 31 },
    { version: 'kjv', bookId: 'JER', chapter: 29, verseNum: 11 },
    { version: 'kjv', bookId: 'MAT', chapter: 11, verseNum: 28 },
    { version: 'kjv', bookId: 'PRO', chapter: 3, verseNum: 5 },
    { version: 'kjv', bookId: '2TI', chapter: 1, verseNum: 7 },
    { version: 'kjv', bookId: 'GAL', chapter: 5, verseNum: 22 }
  ];

  const randomVerse = popularVerses[Math.floor(Math.random() * popularVerses.length)];
  
  return await fetchSingleVerse(
    randomVerse.version,
    randomVerse.bookId,
    randomVerse.chapter,
    randomVerse.verseNum
  );
};

// Get daily verse (you can modify this for your needs)
export const getDailyVerse = async (): Promise<BibleVerse | null> => {
  // Use a consistent verse for the day based on date
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  
  const verses = [
    { version: 'kjv', bookId: 'PSA', chapter: 118, verseNum: 24 },
    { version: 'kjv', bookId: 'LAM', chapter: 3, verseNum: 22 },
    { version: 'kjv', bookId: 'MAT', chapter: 6, verseNum: 34 },
    { version: 'kjv', bookId: 'PHP', chapter: 4, verseNum: 6 },
    // Add more verses for each day of the year
  ];

  const dailyVerse = verses[dayOfYear % verses.length];
  
  return await fetchSingleVerse(
    dailyVerse.version,
    dailyVerse.bookId,
    dailyVerse.chapter,
    dailyVerse.verseNum
  );
};