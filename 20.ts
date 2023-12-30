// Not yet passing
type Letters = {
  A: [
    '█▀█ ',
    '█▀█ ',
    '▀ ▀ ',
  ],
  B: [
    '█▀▄ ',
    '█▀▄ ',
    '▀▀  '
  ],
  C: [
    '█▀▀ ',
    '█ ░░',
    '▀▀▀ '
  ],
  E: [
    '█▀▀ ',
    '█▀▀ ',
    '▀▀▀ '
  ],
  H: [
    '█ █ ',
    '█▀█ ',
    '▀ ▀ '
  ],
  I: [
    '█ ',
    '█ ',
    '▀ '
  ],
  M: [
    '█▄░▄█ ',
    '█ ▀ █ ',
    '▀ ░░▀ '
  ],
  N: [
    '█▄░█ ',
    '█ ▀█ ',
    '▀ ░▀ '
  ],
  P: [
    '█▀█ ',
    '█▀▀ ',
    '▀ ░░'
  ],
  R: [
    '█▀█ ',
    '██▀ ',
    '▀ ▀ '
  ],
  S: [
    '█▀▀ ',
    '▀▀█ ',
    '▀▀▀ '
  ],
  T: [
    '▀█▀ ',
    '░█ ░',
    '░▀ ░'
  ],
  Y: [
    '█ █ ',
    '▀█▀ ',
    '░▀ ░'
  ],
  W: [
    '█ ░░█ ',
    '█▄▀▄█ ',
    '▀ ░ ▀ '
  ],
  ' ': [
    '░',
    '░',
    '░'
  ],
  ':': [
    '#',
    '░',
    '#'
  ],
  '*': [
    '░',
    '#',
    '░'
  ],
};
type ToAsciiArt<T extends string> =
  T extends `${infer F}\n${infer B}`
      ? [...ToAsciiArt<Uppercase<F>>, ...ToAsciiArt<Uppercase<B>>]
      : ToAsciiArtNoNewline<T>;

type ToAsciiArtNoNewline<T extends string> =
  T extends ''
    ? ['', '', '']
    : T extends keyof Letters
      ? Letters[T] extends string[]
        ? Letters[T]
        : never
      : T extends `${infer F}${infer B}`
        ? [
          `${ToAsciiArtNoNewline<F>[0]}${ToAsciiArtNoNewline<B>[0]}`,
          `${ToAsciiArtNoNewline<F>[1]}${ToAsciiArtNoNewline<B>[1]}`,
          `${ToAsciiArtNoNewline<F>[2]}${ToAsciiArtNoNewline<B>[2]}`
        ]
        : never;

type ToAsciiArtNoNewlineN<T extends string> =
  T extends ''
    ? ''
    : T extends keyof Letters
      ? Letters[T] extends string[]
        ? T
        : never
      : T extends `${infer F}${infer B}`
        ? `${ToAsciiArtNoNewlineN<F>}${ToAsciiArtNoNewlineN<B>}`
        : never;
type test0134 = ToAsciiArtNoNewlineN<" * : ">;

type ToAsciiArtNoNewlineNA<T extends string> =
  T extends ''
    ? ['', '', '']
    : T extends keyof Letters
      ? Letters[T] extends string[]
        ? Letters[T]
        : never
      : T extends `${infer F}${infer B}`
        ? [
          `${ToAsciiArtNoNewlineNA<F>[0]}${ToAsciiArtNoNewlineNA<B>[0]}`,
          `${ToAsciiArtNoNewlineNA<F>[1]}${ToAsciiArtNoNewlineNA<B>[1]}`,
          `${ToAsciiArtNoNewlineNA<F>[2]}${ToAsciiArtNoNewlineNA<B>[2]}`
        ]
        : never;
type test013 = ToAsciiArtNoNewlineNA<' * : '>;

type test = "*: " extends "" ? true : false
type Test<T extends string> =
" * : " extends "" ? true : never;
type testing = Test<" * : ">;

type test00 = ToAsciiArt<" * ">;
type test01 = ToAsciiArt<"\n* : ">;
type test02 = ToAsciiArtNoNewlineN<' * : '>;
type test031 = ToAsciiArt<" * : \n  Ecyrbe">;
type test032 = ToAsciiArtNoNewline<"* : ">;

type test023 = ToAsciiArtNoNewline<"  *  ">;
type test0234 = ToAsciiArtNoNewline<"  *  ">;
type test03 = ToAsciiArt<"  * : ">;
type test033 = ToAsciiArtNoNewline<"  : * : ">;