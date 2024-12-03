import isValidCardNumber from "../lunacheck";

import { getCardType } from "../lunacheck";

describe("isValidCardNumber", () => {
  test("should return true for a valid Visa number", () => {
    expect(isValidCardNumber("4111 1111 1111 1111")).toBe(true);
  });

  test("should return true for a valid MasterCard number", () => {
    expect(isValidCardNumber("5500 0000 0000 0004")).toBe(true);
  });

  test("should return true for a valid American Express number", () => {
    expect(isValidCardNumber("3782 8224 6310 005")).toBe(true);
  });

  test("should return false for an invalid number", () => {
    expect(isValidCardNumber("1234 5678 9012 3456")).toBe(false);
  });

  test("should return false for a number with non-numeric characters", () => {
    expect(isValidCardNumber("4111-1111-1111-1111")).toBe(false);
  });

  test("should return false for an empty number", () => {
    expect(isValidCardNumber("")).toBe(false);
  });
});

describe("getCardType", () => {
  test('should return "Visa" for a Visa number', () => {
    expect(getCardType("4111111111111111")).toBe("Visa");
  });

  test('should return "MasterCard" for a MasterCard number', () => {
    expect(getCardType("5500000000000004")).toBe("MasterCard");
  });

  test('should return "American Express" for an American Express number', () => {
    expect(getCardType("378282246310005")).toBe("American Express");
  });

  test('should return "Unknown card" for an invalid number', () => {
    expect(getCardType("1234567890123456")).toBe("Unknown card");
  });

  test('should return "Mir" for a Mir number', () => {
    expect(getCardType("2200000000000004")).toBe("Mir");
  });
});
