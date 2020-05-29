const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  return nums.indexOf(n) == (-1) ?
    null :
    nums[nums.indexOf(n) + 1] !== undefined ?
      nums[nums.indexOf(n) + 1] :
      null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  let ones = 0;
  let zeroes = 0;

  str.split("").forEach(element => {
    element === '0' ? zeroes += 1 :
      element === '1' ? ones += 1 : null;
  });

  return {
    1: ones,
    0: zeroes,
  }
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  return Number.parseInt(`${n}`.split("").reverse().join(""));
  
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  return arrs.flat().reduce((acc, val) => acc + val);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");

  let firstEl = arr[0];
  let lastEl = arr[arr.length-1];

  if (arr.length > 1){

    arr[0] = lastEl;
    arr[arr.length-1] = firstEl; 
  }
    
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  return Object.values(haystack).join("").toLowerCase().includes(searchTerm.toLowerCase());

};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  let countedArrayObj = {};
  
  const splitStringToArray = str.toLowerCase().match(/\w+/g);

  splitStringToArray.forEach(el => countedArrayObj[el] = (countedArrayObj[el] || 0) + 1);

  return countedArrayObj;

};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
