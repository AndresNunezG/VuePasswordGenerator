export const LETTERS_LOW = new Set(
  [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ]
)

export const SYMBOLS = [
  "#", ".", "&", "!", "$", "@", "(",
  ")", "-", "+", "?", "/", "~", "^",
]

export const LETTERS_UPP = Array.from(LETTERS_LOW).map(l => l.toUpperCase())

export const DIGITS = Array(10).fill(0).map((_, i) => String(i))
