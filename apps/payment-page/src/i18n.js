import en from './locales/en.json';
import th from './locales/th.json';

const dictionaries = { en, th };

export function getDictionary(locale = 'en') {
  return dictionaries[locale] || dictionaries.en;
}

export function translate(dictionary, key, values = {}) {
  const template = dictionary[key] || key;
  return Object.entries(values).reduce(
    (text, [name, value]) => text.replaceAll(`{{${name}}}`, String(value)),
    template
  );
}
