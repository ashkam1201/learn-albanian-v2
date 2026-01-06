export type LanguageCode = 'AL' | 'EN';

export interface Question {
  id: string;
  prompt: string;
  fromLang: LanguageCode;
  toLang: LanguageCode;
  answer: string;
  hint?: string;
}
