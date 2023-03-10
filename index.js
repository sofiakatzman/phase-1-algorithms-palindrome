// Write your algorithm here
function isPalindrome(word) {
let charArray = Array.from(word)
let revCharArray = charArray.slice().reverse()
if (JSON.stringify(charArray)==JSON.stringify(revCharArray)) {
  return true;
}
else {
  return false
}
}


/* 
  Add your pseudocode here
1. write function that takes a string
2. each character in the string is pushed into an array 
(one char per index)
3.that array is compared to its reverse array 
if true : it is a palindrome
  */

/*
My code takes a string and converts each element into an index of an array. That array is then copied and reversed.
Both arrays are compared using the JSON.stringify() method : if they match the function returns true, otherwise false is returned.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
