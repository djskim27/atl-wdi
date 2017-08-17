// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////

// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
var sumOfNums = function(numsArray){
  // Your Code Here
  if (numsArray.length > 0) {
     return numsArray.reduce(function(a,b) {
    return a + b
  });
  } else {
     return 0;
}
  
};

// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10
var numsGreaterThanTen = function(numsArray){
  // Your Code Here
   var newArray = [];
  for (var i = 0; i < numsArray.length; i++) {
    if (numsArray[i] > 10) {
      newArray.push(numsArray[i]);
    }
  }
  return newArray;
};

// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
var allGreaterThanTen = function(numsArray){
  // Your Code Here
 if (numsArray.length > 0) {
  for (var i = 0; i < numsArray.length; i++) {
    if (numsArray[i] > 10) {
      return true;
    } else {
      return false;
    }
  }
 } else {
   return true;
 }
};

// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
var wordsWithAtLeastFiveLetters = function(words){
  // Your Code Here
   var newArray = [];
   for(var i=0; i<words.length; i++) {
     if (words[i].length>4) {
       newArray.push(words[i]);
     }
   }
   return newArray;
};
//**NEED TO LOOK OVER**
// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allStartingWithA = function(words){
  // Your Code Here
  for (var i = 0; i < words.length; i++) {
    if (!(words[i].slice(0, 1) === 'a' || words[i].slice(0, 1) === 'A')) {
         return false;
    }
  }
  return true;
};
//**WHAT THE HELL**
// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
var anyStartingWithB = function(words){
  // Your Code Here
  for (var i = 0; i < words.length; i++) {
    if (words[i].slice(0, 1) === 'b' || words [i].slice(0, 1) === 'B') {
      return true;
    
    }
  }
  return false;
};

// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
var hasAtLeastNVowels = function(word, n){
  // Your Code Here
  // found .match(/[aeiou]|[AEIOU]/g) from google search *I do not understand concept*
 if (n < 0) {
   return null;
 }
 
 return word.match(/[aeiou]|[AEIOU]/g).length >= n;

};

// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels
var wordsWithAtLeastTwoVowels = function(words){
  // Your Code Here
var newArray = [];
for (var i=0; i<words.length; i++){
  
  if (words[i].match(/[aeiou]|[AEIOU]/g).length > 1) {
    newArray.push(words[i]);
  }
}
return newArray;
};

// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allHaveAtLeastTwoVowels = function(words){
  // Your Code Here
  
  for (var i=0; i<words.length; i++) {
    if ((words[i].match(/[aeiou]|[AEIOU]/g).length) < 2) {
    return false;
  }
  
  }
  return true;
};

// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
var anyHaveAtLeastTwoVowels = function(words){
  // Your Code Here
  for (var i=0; i<words.length; i++) {
    if ((words[i].match(/[aeiou]|[AEIOU]/g).length) > 1) {
    return true;
    } else {
      return false;
    }
  }
};

// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var noneHaveTwoOrMoreVowels = function(words){
  
  // Your Code Here
   for (var i=0; i<words.length; i++) {
    if ((words[i].match(/[aeiou]|[AEIOU]/g).length) > 1) {
    return false;
    } 
   }
return true;
};

// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}
var buildObjectFromWords = function(words){
  // Your Code Here
  //I DO NOT UNDERSTAND THIS SOLUTION
  //I understand making the empty obj but the process of filling object
  //with words from array doesn't make sense to me
  var newObj ={};
  for (var i=0; i<words.length; i++){
    newObj[words[i]] = words[i].length;
  }
  return newObj;
};


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}