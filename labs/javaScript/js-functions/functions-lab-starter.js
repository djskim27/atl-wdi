// Question 1
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "They equal each other!"
  }

}

// Question 2
function maxOfThree(x, y, z) {
if (x>y && x>z) {
    return x;
} else if (y>x && y>z) {
    return y;
} else if (z>x && z>y) {
    return z;
}
}

// Question 3
function isCharacterAVowel(a) {
if (a.length === 1 && (a.toLowerCase().charAt(0)==='a' || a.toLowerCase().charAt(0)==='e' || a.toLowerCase().charAt(0)==='i' || a.toLowerCase().charAt(0)==='o' || a.toLowerCase().charAt(0)==='u')) {
    return true;
} else {
    return false;
}
} 

// Question 4
function sumArray(array) {
    var sum = 0;
 for (var i = 0; i<array.length; i++) {
     sum += array[i];
     
 }
 return sum;
}


// Question 4
function multiplyArray(array) {
    var product = array[0];
for (var i = 1; i<array.length; i++) {
    product *= array[i];
}
return product;


}


// Question 5
var numberOfArguments = function(){
  return args.length;
}



// Question 6
var reverseString = function (string){
  return string.split('').reverse().join('');
};


// Question 7
function findLongestWord (arrayOfWords) {
    var longestWord = "";
    for (var i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > longestWord.length) {
            longestWord = arrayOfWords[i];
        }
    }
return longestWord;
  
}


// Question 8
function filterLongWords (array, i) {
    var newArray =[];
    for (var x=0; x<array.length; x++) {
        if(array[x].length > i) {
            newArray.push(array[x]);
        }
    }
  return newArray;
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}
