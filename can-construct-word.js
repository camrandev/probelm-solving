"use strict";
// add whatever parameters you deem necessary & write doc comment

/**creates a frequency table counting up the frequency of the characters in string */
function makeFreqTable(string) {
  const freqTable = {};

  for (let char of string) {
    freqTable[char] = freqTable[char] + 1 || 1;
  }

  return freqTable;
}
console.log(makeFreqTable("aabb"));

/**given two strings, return a boolean indicating if string1 can be build with the
 * letters in string2
 *
 * time complexity is O(w+k) is this the same as O(N)??
 */

/**
 * inputs: two strings of lowercase characters
 * -word and letters
 * output: boolean
 * edgecases: aside from invalid inputs, none, given that letter casing was addressed
 *
 *
 *
 */

//pseudocode
//guard against case of letters being shorter than word (includes case of letters being empty)
//make freq table from letters
//loop through word, reducing letters from values table as used
//if we need a letter in word, and that letter does not exist in table
//return false
//return true

//make freq table for word - w
//make freq table for letters + K
//loop over keys in freqWord, check them against letters w
//return false case
//return true case
//2w + k

function canConstructWord(word, letters) {
  const wordFreqTable = makeFreqTable(word);
  const letterFreqTable = makeFreqTable(letters);

  for (let key in wordFreqTable) {
    if (!letterFreqTable[key]) {
      return false;
    }

    if (letterFreqTable[key] < wordFreqTable[key]) {
      return false;
    }
  }

  return true;
}
