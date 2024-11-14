import { LocaleConfig, LocaleInterface } from '../types';

export default class Locale implements LocaleInterface {
  public config: LocaleConfig = {
    currency: {
      name: 'جٌنيه',
      plural: 'جنيهات',
      singular: 'جُنيه',
      symbol: '',
      fractionalUnit: {
        name: 'قرش',
        singular: 'قرش',
        plural: 'قروش',
        symbol: '',
      },
    },
    texts: {
      and: 'و',
      minus: 'سالب',
      only: 'فقط',
      point: 'فاصلة',
    },
    numberWordsMapping: [
      { number: 10000000, value: 'عشرة ملايين' },
      { number: 100000, value: 'مئة ألف' },
      { number: 1000, value: 'ألف' },
      { number: 1000, value: 'آلف' },
      { number: 1000, value: 'ألفاً' },
      { number: 900, value: 'تسعمائة' },
      { number: 800, value: 'ثمانمائة' },
      { number: 700, value: 'سبعمائة' },
      { number: 600, value: 'ستمائة' },
      { number: 500, value: 'خمسمائة' },
      { number: 400, value: 'أربعمائة' },
      { number: 300, value: 'ثلاثمائة' },
      { number: 200, value: 'مائتي' },
      { number: 100, value: 'مائة' },
      { number: 99, value: 'تسعة و تسعون' },
      { number: 98, value: 'ثمانية و تسعون' },
      { number: 97, value: 'سبعة و تسعون' },
      { number: 96, value: 'ستة و تسعون' },
      { number: 95, value: 'خمسة و تسعون' },
      { number: 94, value: 'أربعة و تسعون' },
      { number: 93, value: 'ثلاثة و تسعون' },
      { number: 92, value: 'اثنان و تسعون' },
      { number: 91, value: 'واحد و تسعون' },
      { number: 90, value: 'تسعون' },
      { number: 89, value: 'تسعة و ثمانون' },
      { number: 88, value: 'ثمانية و ثمانون' },
      { number: 87, value: 'سبعة و ثمانون' },
      { number: 86, value: 'ستة و ثمانون' },
      { number: 85, value: 'خمسة و ثمانون' },
      { number: 84, value: 'أربعة و ثمانون' },
      { number: 83, value: 'ثلاثة و ثمانون' },
      { number: 82, value: 'اثنان و ثمانون' },
      { number: 81, value: 'واحد و ثمانون' },
      { number: 80, value: 'ثمانون' },
      { number: 79, value: 'تسعة و سبعون' },
      { number: 78, value: 'ثمانية و سبعون' },
      { number: 77, value: 'سبعة و سبعون' },
      { number: 76, value: 'ستة و سبعون' },
      { number: 75, value: 'خمسة و سبعون' },
      { number: 74, value: 'أربعة و سبعون' },
      { number: 73, value: 'ثلاثة و سبعون' },
      { number: 72, value: 'اثنان و سبعون' },
      { number: 71, value: 'واحد و سبعون' },
      { number: 70, value: 'سبعون' },
      { number: 69, value: 'تسعة و ستون' },
      { number: 68, value: 'ثمانية و ستون' },
      { number: 67, value: 'سبعة و ستون' },
      { number: 66, value: 'ستة و ستون' },
      { number: 65, value: 'خمسة و ستون' },
      { number: 64, value: 'أربعة و ستون' },
      { number: 63, value: 'ثلاثة و ستون' },
      { number: 62, value: 'اثنان و ستون' },
      { number: 61, value: 'واحد و ستون' },
      { number: 60, value: 'ستون' },
      { number: 59, value: 'تسعة و خمسون' },
      { number: 58, value: 'ثمانية و خمسون' },
      { number: 57, value: 'سبعة و خمسون' },
      { number: 56, value: 'ستة و خمسون' },
      { number: 55, value: 'خمسة و خمسون' },
      { number: 54, value: 'أربعة و خمسون' },
      { number: 53, value: 'ثلاثة و خمسون' },
      { number: 52, value: 'اثنان و خمسون' },
      { number: 51, value: 'واحد و خمسون' },
      { number: 50, value: 'خمسون' },
      { number: 49, value: 'تسعة و أربعون' },
      { number: 48, value: 'ثمانية و أربعون' },
      { number: 47, value: 'سبعة و أربعون' },
      { number: 46, value: 'ستة و أربعون' },
      { number: 45, value: 'خمسة و أربعون' },
      { number: 44, value: 'أربعة و أربعون' },
      { number: 43, value: 'ثلاثة و أربعون' },
      { number: 42, value: 'اثنان و أربعون' },
      { number: 41, value: 'واحد و أربعون' },
      { number: 40, value: 'أربعون' },
      { number: 39, value: 'تسعة و ثلاثون' },
      { number: 38, value: 'ثمانية و ثلاثون' },
      { number: 37, value: 'سبعة و ثلاثون' },
      { number: 36, value: 'ستة و ثلاثون' },
      { number: 35, value: 'خمسة و ثلاثون' },
      { number: 34, value: 'أربعة و ثلاثون' },
      { number: 33, value: 'ثلاثة و ثلاثون' },
      { number: 32, value: 'اثنان و ثلاثون' },
      { number: 31, value: 'واحد و ثلاثون' },
      { number: 30, value: 'ثلاثون' },
      { number: 29, value: 'تسعة و عشرون' },
      { number: 28, value: 'ثمانية و عشرون' },
      { number: 27, value: 'سبعة و عشرون' },
      { number: 26, value: 'ستة و عشرون' },
      { number: 25, value: 'خمسة و عشرون' },
      { number: 24, value: 'أربعة و عشرون' },
      { number: 23, value: 'ثلاثة و عشرون' },
      { number: 22, value: 'اثنان و عشرون' },
      { number: 21, value: 'واحد و عشرون' },
      { number: 20, value: 'عشرون' },
      { number: 19, value: 'تسعة عشر' },
      { number: 18, value: 'ثمانية عشر' },
      { number: 17, value: 'سبعة عشر' },
      { number: 16, value: 'ستة عشر' },
      { number: 15, value: 'خمسة عشر' },
      { number: 14, value: 'أربعة عشر' },
      { number: 13, value: 'ثلاثة عشر' },
      { number: 12, value: 'اثنا عشر' },
      { number: 11, value: 'أحد عشر' },
      { number: 10, value: 'عشرة' },
      { number: 9, value: 'تسعة' },
      { number: 8, value: 'ثمانية' },
      { number: 7, value: 'سبعة' },
      { number: 6, value: 'ستة' },
      { number: 5, value: 'خمسة' },
      { number: 4, value: 'أربعة' },
      { number: 3, value: 'ثلاثة' },
      { number: 2, value: 'اثنان' },
      { number: 1, value: 'واحد' },
      { number: 0, value: 'صفر' },
    ],
    ignoreOneForWords: [
      'مئة',
      'مائة',
      'مائتي',
      'ثلاثمائة',
      'أربعمائة',
      'خمسمائة',
      'ستمائة',
      'سبعمائة',
      'ثمانمائة',
      'تسعمائة',
      'ألف',
      'آلف',
    ],
    splitWord: 'و',
    pluralWords: ['Million'],
    decimalLengthWordMapping: {
      1: 'عشرة',
      2: 'مائة',
      3: 'ألف',
      4: 'عشرة آلاف',
      5: 'مائة ألف',
      6: 'مليون',
      7: 'عشرة ملايين',
      8: 'مائة مليون',
      9: 'مليار',
    },
  };
}
