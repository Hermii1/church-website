import { useState } from 'react';
import { fetchBibleVerse } from '@/utils/bibleApi';

export default function TestApi() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testApi = async (version: string, bookId: string, chapter: number, verse: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBibleVerse(version, bookId, chapter, verse);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Bible API</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <button 
          onClick={() => testApi('kjv', 'JHN', 3, 16)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Test English (KJV) John 3:16
        </button>
        
        <button 
          onClick={() => testApi('amhara', 'JHN', 3, 16)}
          className="bg-green-500 text-white p-2 rounded"
        >
          Test Amharic John 3:16
        </button>
        
        <button 
          onClick={() => testApi('oromo', 'JHN', 3, 16)}
          className="bg-purple-500 text-white p-2 rounded"
        >
          Test Oromic John 3:16
        </button>
      </div>

      {loading && <div className="text-blue-500">Loading...</div>}
      
      {error && (
        <div className="text-red-500 p-4 bg-red-100 rounded">
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {result && (
        <div className="p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-semibold mb-2">Result:</h2>
          <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}