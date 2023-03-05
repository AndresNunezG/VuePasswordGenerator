import {
  LETTERS_LOW,
  LETTERS_UPP,
  DIGITS,
  SYMBOLS
} from "./constants";

export default class PswdGenerator {
  /**
   * type configChars:
   * {
   *  LETTERS_LOW: true,
   *  LETTERS_UPP: true,
   *  DIGITS: true,
   *  SYMBOLS: true
   * }
   */

  constructor(configChars) {
    this.LETTERS_LOW = LETTERS_LOW
    this.LETTERS_UPP = LETTERS_UPP
    this.DIGITS = DIGITS
    this.SYMBOLS = SYMBOLS
    this.defaultLenght = 8
    this.configChars = {...configChars}
    this.chars = []
    this.#setChars()
  }

  #getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  #setChars() {
    for (const key in this.configChars) {
      if (!this.configChars[key]) continue
      this.chars = [...this.chars, ...this[key]]
    }
    this.#shuffleChars()
  }

  #shuffleChars() {
    let currentIndex = this.chars.length
    let randomIndex
    while (currentIndex != 0) {
      randomIndex = this.#getRandomInt(currentIndex)
      currentIndex--
      [
        this.chars[currentIndex],
        this.chars[randomIndex]
      ] = [
        this.chars[randomIndex],
        this.chars[currentIndex]
      ]
    }
  }

  generatePswd(pswdLen) {
    const len = pswdLen || this.defaultLenght
    let result = ''
    if (!this.chars.length) return result
    for(const _ of [...Array(len).keys()]) {
      result += this.chars[this.#getRandomInt(this.chars.length)]
    }
    return result
  }
}
