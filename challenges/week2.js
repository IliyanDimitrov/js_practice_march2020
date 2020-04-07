function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return person.city === "Manchester" ? true : false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  
  return arr.reduce((counter, animal) => {
    if(animal === 'sheep') {
      counter++;
    }
    return counter;
  }, 0);
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  const postCode = person.address['postCode'];

  return postCode.charAt(0) === 'M' && isFromManchester(person.address);
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
