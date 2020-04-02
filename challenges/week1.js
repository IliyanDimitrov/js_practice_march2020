function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  let capitalizedWord = word; 

  if (word.charAt(0).toUpperCase() !== word.charAt(0)) {

    //Used .replace method to replace the first char of word with it's capitalized equivalent.

    capitalizedWord = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  }
  
  return capitalizedWord;
  
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return `${firstName.charAt(0)}.${lastName.charAt(0)}`;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  //Declared a variable containing the Vat included price

  let includeVat = (originalPrice * vatRate) / 100 + originalPrice;

  /*Built the solution with ternary operator.

    Line #1: Checking if there is vat rate if none applied simply return the orginal price
    Line #2: Checking if the price with the vat included is whole number if yes, simply returning it
    Line #3: If decimal return to second digit after floating point

  */
  return vatRate <= 0 ? originalPrice : 
  Number.isInteger(includeVat) ? includeVat : 
  Number.parseFloat(includeVat.toFixed(2)); 

}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  //Declared a variable containing the Sale price
  
  let discountedPrice = originalPrice * (1 - reduction / 100);

   /*Built the solution with ternary operator.

    Line #1: Checking if there is any reduction if none applied simply return the orginal price
    Line #2: Checking if the sale price is decimal with 2digits after the floating point
    if yes simply returning it
    Line #3: If NO return to second digit after floating point

  */
  return reduction <= 0 ? originalPrice :
  discountedPrice.toString().length < 5 ? discountedPrice : 
  Number.parseFloat(discountedPrice.toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  return str.length % 2 == 0 ? 

  str.substring(str.length / 2 - 1, str.length / 2 + 1) :  //If length is even num

  str[Math.ceil(str.length / 2 - 1)]; //If length is odd num

}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
