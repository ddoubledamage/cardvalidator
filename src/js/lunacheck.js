export default function isValidCardNumber(cardNumber) {
  cardNumber = cardNumber.replace(/\s+/g, "");
  if (!/^\d+$/.test(cardNumber)) return false;

  let sum = 0;
  let shouldDouble = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

export function getCardType(cardNumber) {
  const cardTypes = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    MasterCard: /^(5[1-5][0-9]{14})$/,
    "American Express": /^(34|37)[0-9]{13}$/,
    Discover: /^(6011|65|622[1-9][0-9]{12})$/,
    Mir: /^(220[0-4][0-9]{12})$/,
  };

  for (const [type, regex] of Object.entries(cardTypes)) {
    if (regex.test(cardNumber)) {
      return type;
    }
  }
  return "Unknown card";
}
