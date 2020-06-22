/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");

  return n.toString().split('').reduce((acc, num) => (acc * 1) + (num * 1));
};

/**
 * This function creates a range of numbers as an array. 
 * It received a start, an end and a step. Step is the gap between numbers in the range. 
 * For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");

    return Array(1 + (end - start) / step).fill(start).map((el, index) => 
    index === 0 ? el= start : el = start + (index * step));   
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", console.log(: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  let userNameAlert = [];

  users.forEach(user => {
    user.screenTime.forEach(scrTime => {

      let sumUsage = 0;

      if (scrTime.date === date) {
        for (let [key, value] of Object.entries(scrTime.usage)) {
          sumUsage += value;
        }

        if (sumUsage > 100) {
          userNameAlert.push(user.username);
        }
      }
    })
  });

return userNameAlert;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
 
  const hexDigitPairs = hexStr.match(/[\d\w]+/g).join('').split('').reduce((acc, value, index, array) => {

    if (index % 2 === 0)
      acc.push(parseInt(array.slice(index, index + 2).join(''), 16));
      return acc;

  }, []);

  return `rgb(${hexDigitPairs.join(',')})`;


};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  let xPositions = [];
  let oPositions = [];
  
  //capture the '0' & 'x' positions on the board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      board[i][j] === "X" ? xPositions.push(j) : false;
      board[i][j] === "0" ? oPositions.push(j) : false;
    }
  }

  const winnerCheck = (pos, filteredPos = [], result = []) => {

    //Arrays with only 3 positions will be fitered but the original order will remain the same.
    //Loop through the array and check if all positions are the same. 
    //If not check if there is a difference of one.

    if (pos.length > 3) {

      filteredPos = [...new Set(pos)];

      if (!filteredPos.every((el, index, arr) => el === arr[0])) {

          for(let i = 0; i < filteredPos.length - 1; i++) {
            
            result.push(Math.abs(filteredPos[i] - filteredPos[i+1]) === 1)    
          }
          return result.every(el => el);
        }
        return true;

    //Arrays with only 3 positions don't need filtering

    } else if (pos.length === 3) {

      if (!pos.every((el, index, arr) => el === arr[0])) {

        for(let i = 0; i < pos.length - 1; i++) {
          
          result.push(Math.abs(pos[i] - pos[i+1]) === 1)    
        }
        return result.every(el => el);
      }
      return true;

    //If not enough positions for 'x' or '0' return false to winnerCheck

    } else if (pos.length < 3) return false;
  }

  //winnerCheck will return 'true' or 'false' for the 'x', '0' or null

  return winnerCheck(xPositions) ? "X" :
         winnerCheck(oPositions) ? "0" : null;

};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
