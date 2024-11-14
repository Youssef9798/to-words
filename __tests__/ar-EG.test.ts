// import { cloneDeep } from 'lodash';
import { ToWords } from '../src/ToWords';
import arEg from '../src/locales/ar-EG';

const localeCode = 'ar-EG';
const toWords = new ToWords({
  localeCode,
});

describe('Test Locale', () => {
  test(`Locale Class: ${localeCode}`, () => {
    expect(toWords.getLocaleClass()).toBe(arEg);
  });

  const wrongLocaleCode = localeCode + '-wrong';
  test(`Wrong Locale: ${wrongLocaleCode}`, () => {
    const toWordsWrongLocale = new ToWords({
      localeCode: wrongLocaleCode,
    });
    expect(() => toWordsWrongLocale.convert(1)).toThrow(/Unknown Locale/);
  });
});

const testIntegers = [
  [0, 'صفر'],
  [137, 'مائة و سبعة و ثلاثون'],
  [700, 'سبعمائة'],
  [99, 'تسعة و تسعون'],
  [1100, 'ألف و مائة'],
  [4680, 'أربعة آلاف و ستمائة و ثمانون'],
  [63892, 'ثلاثة و ستون ألفاً و ثمانمائة و اثنان و تسعون'],
  [86100, 'ستة و ثمانون ألفاً و مائة'],
  [792581, 'سبعمائة و اثنان و تسعون ألفاً و خمسمائة و واحد و ثمانون'],
  [2741034, 'مليونان و سبعمائة و واحد و أربعون ألفاً و أربعة و ثلاثون'],
  [86429753, 'ستة و ثمانون مليوناً و أربعمائة و تسعة و عشرون ألفاً و سبعمائة و ثلاثة و خمسون'],
  [975310864, 'تسعمائة و خمسة و سبعون مليوناً و ثلاثمائة و عشرة آلاف و ثمانمائة و أربعة و ستون'],
  [9876543210, 'تسعة مليارات و ثمانمائة و ستة و سبعون مليوناً و خمسمائة و ثلاثة و أربعون ألفاً و مائتان و عشرة'],
  [
    98765432101,
    'ثمانية و تسعون ملياراً و سبعمائة و خمسة و ستون مليوناً و أربعمائة و اثنان و ثلاثون ألفاً و مائة و واحد',
  ],
  [
    987654321012,
    'تسعمائة و سبعة و ثمانون ملياراً و ستمائة و أربعة و خمسون مليوناً و ثلاثمائة و واحد و عشرون ألفاً و اثنا عشر',
  ],
  [
    9876543210123,
    'تسعة تريليونات وثمانمائة وستة وسبعون ملياراً وخمسمائة وثلاثة وأربعون مليوناً ومائتان وعشرة آلاف ومائة وثلاثة وعشرون',
  ],
  [
    98765432101234,
    'ثمانية وتسعون تريليوناً وسبعمائة وخمسة وستون ملياراً وأربعمائة واثنان وثلاثون مليوناً ومائة وواحد ألف ومائتان وأربعة وثلاثون',
  ],
];

describe('Test Integers with options = {}', () => {
  test.concurrent.each(testIntegers)('convert %d => %s', (input, expected) => {
    expect(toWords.convert(input as number)).toBe(expected);
  });
});
