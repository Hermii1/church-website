import { useLanguage } from '@/Context/LanguageContext'

// Import translation files
import en from '@/locals/en.json'
import am from '@/locals/am.json'
import ti from '@/locals/ti.json'
import om from '@/locals/om.json'

const translations = {
  en,
  am,
  ti,
  om
}

export function useTranslation() {
  const { language } = useLanguage()

  const t = (key: string, fallback?: string): string => {
    // Split the key by dots to navigate the nested object
    const keys = key.split('.')
let value: unknown = translations[language]

for (const k of keys) {
  if (value && typeof value === 'object' && k in value) {
    value = (value as Record<string, unknown>)[k]
  } else {
    return fallback || key
  }
}

return typeof value === 'string' ? value : fallback || key
  }

  return { t, language }
}