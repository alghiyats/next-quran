export interface Surah {
  number: number;
  sequence: number;
  numberOfVerses: number;
  name: {
    short: string;
    long: string;
    transliteration: {
      en: string;
      id: string;
    };
    translation: {
      en: string;
      id: string;
    };
  };
  revelation: {
    arab: string;
    en: string;
    id: string;
  };
  tafsir: {
    id: string;
  };
  preBismillah: null | {
    arab: string;
    transliteration: {
      en: string;
    };
    translation: {
      en: string;
      id: string;
    };
  };
  verses: Array<{
    number: {
      inQuran: number;
      inSurah: number;
    };
    meta: {
      juz: number;
      page: number;
      manzil: number;
      ruku: number;
      hizbQuarter: number;
      sajda: {
        recommended: boolean;
        obligatory: boolean;
      };
    };
    text: {
      arab: string;
      transliteration: {
        en: string;
      };
    };
    translation: {
      en: string;
      id: string;
    };
    audio: {
      primary: string;
      secondary: string[];
    };
    tafsir: {
      id: {
        short: string;
        long: string;
      };
    };
  }>;
}
