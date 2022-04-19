// Write your algorithm here
function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      // if the letters don't match, return false
      return false;
    }
  }

  // if we reach the middle, and all the letters match, return true
  return true;
}


/* 
  Add your pseudocode here

  //take in the word
  //iterate over half the array
  //check the intial and end letter to see if they match
  //move into the array after each iteration

*/

/*
  Add written explanation of your solution here
  //code iterates until the middle letter
  //if the letters on either side match then return true
  //i.e for racecar if the r in the beginning matches r in the end that is true. if the a's match that is true
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
