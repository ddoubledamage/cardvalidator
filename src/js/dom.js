import isValidCardNumber from "./lunacheck";

import { getCardType } from "./lunacheck";

document
  .querySelector(".validate")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const cardNumber = document.querySelector(".cardNumber").value;
    const isValid = isValidCardNumber(cardNumber);
    const cardType = getCardType(cardNumber);

    document.getElementById("result").innerText = isValid
      ? `The card is valid. Payments type: ${cardType}`
      : "The card type is invalid.";
  });
