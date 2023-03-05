import { assert, expect, test, describe, it } from "vitest"
import PswdGenerator from "../utils/generator"

const options = {
  LETTERS_LOW: false,
  LETTERS_UPP: false,
  DIGITS: false,
  SYMBOLS: false
}

test("passwordLength", () => {
  const optionsCopy = {...options, LETTERS_LOW: true}
  const pswdGenerator = new PswdGenerator({...optionsCopy})
  expect(pswdGenerator.generatePswd(10).length).toBe(10)
  expect(pswdGenerator.generatePswd(6).length).toBe(6)
  expect(pswdGenerator.generatePswd(5).length).toBe(5)
})

test("passwordInequality", () => {
  const optionsCopy = {...options, LETTERS_LOW: true}
  const pswdGenerator = new PswdGenerator({...optionsCopy})
  const pswdA = pswdGenerator.generatePswd(10)
  const pswdB = pswdGenerator.generatePswd(10)
  assert.notEqual(pswdA, pswdB)
})

describe('generatorCharSets', () => {

  it('lowercase', () => {
    const optionsCopy = {...options, LETTERS_LOW: true}
    const pswdGenerator = new PswdGenerator({...optionsCopy})
    const pswd = pswdGenerator.generatePswd(10)
    expect(pswd).toMatch(/^[a-z]{10}$/)
  })

  it('uppercase', () => {
    const optionsCopy = {...options, LETTERS_UPP: true}
    const pswdGenerator = new PswdGenerator({...optionsCopy})
    const pswd = pswdGenerator.generatePswd(8)
    expect(pswd).toMatch(/^[A-Z]{8}$/)
  })

  it('digits', () => {
    const optionsCopy = {...options, DIGITS: true}
    const pswdGenerator = new PswdGenerator({...optionsCopy})
    const pswd = pswdGenerator.generatePswd(6)
    expect(pswd).toMatch(/^[0-9]{6}$/)
  })

  it('symbols', () => {
    const optionsCopy = {...options, SYMBOLS: true}
    const pswdGenerator = new PswdGenerator({...optionsCopy})
    const pswd = pswdGenerator.generatePswd(20)
    expect(pswd).toMatch(/^[#\.&!\$@\(\)\-\+\?\/~\^]{20}$/)
  })

})
