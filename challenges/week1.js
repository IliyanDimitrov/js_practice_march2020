//============================

//Created the funtion to refactor my code as I had to use the same logic few times now

function formatNumber(number) {

  return Number.isInteger(number) ? number : Number.parseFloat(number.toFixed(2)); 

}

//============================

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

  //Refactored the code(created formatNumber func ^top)
  return vatRate <= 0 ? originalPrice : formatNumber(includeVat); 
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  //Declared a variable containing the Sale price
  
  let discountedPrice = originalPrice * (1 - reduction / 100);

  //Refactored the code(created formatNumber func ^top)

  return reduction <= 0 ? originalPrice : formatNumber(discountedPrice); 
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  return str.length % 2 == 0 ? 

  //If length is even num
  str.substring(str.length / 2 - 1, str.length / 2 + 1) :  

  //If length is odd num
  str[Math.ceil(str.length / 2 - 1)];
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  //Used split to make the string an array, reverced it, joined back reversed

  return word.split('').reverse().join(''); 
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  //Went throught the array with the map method and reversed every word then returned the reversed array.

  const reversedArray = words.map(word => word.split('').reverse().join(''));

  return reversedArray;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  
  //created counter

  let linuxUsersCounter = 0;

  for(let os of users) {

    //for every os match we add one to the count

    if(os.type === "Linux") {
      linuxUsersCounter++;
    }
  }

  //return the total count

  return linuxUsersCounter;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  let totalScore = 0;

  scores.forEach(score => totalScore += score);

  //Used my function for rounding

  return formatNumber(totalScore / scores.length); 
} 

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if (n % 3 != 0 && n % 5 != 0) {
    return n;
  } else if (n % 3 == 0 && n % 5 == 0) { 
    return "fizzbuzz";
  } else if (n % 5 == 0) {
    return "buzz";
  } else if (n % 3 == 0) {
    return "fizz";
  }
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
