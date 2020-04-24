function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
    return nums.map(x => x*x);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  return words.map((el, i) => i != 0 ? el.replace(el[0], el[0].toUpperCase()) : el).join('');
    
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  return people.reduce((count, person) => 
    person['subjects'].length != 0 ? count += person['subjects'].length : count, 0);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let match = false;

  for(let dish of menu){
    dish['ingredients'].includes(ingredient) ? match = true : false;
  }

  return match;

}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  return [...new Set(arr1.filter(num => arr2.includes(num)).sort())];
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
