'use strict';
/* Pig Latin  Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

                If a word begins with a vowel you just add "way" to the end.

 */
/* ------------------------------------------------------------------------------------------------------------------- */
function translatePigLatin(str) {
  let regexp = /[aeiouy]/gi;
  let newStr = '';

  if(regexp.test(str[0])) {
    return str + 'way';
  } else if (!regexp.test(str)) {
    return str + 'ay';
  } else {
    let index = str.indexOf(str.match(regexp)[0]);
    newStr = str.substring(index) + str.substring(0, index) + 'ay';
  }
  return newStr;
}

console.log(translatePigLatin("Array"));

function  AdvancedPigLatin(str) {
    function check(obj) {
        return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
    }
    return str.substring(check(0)).concat((check(0) === 0 ? 'w' : str.substring(0,check(0))) + 'ay');
}

console.log(AdvancedPigLatin("consonant"));

/* MY solution*/

function myPigLatin(str) {
    let strArr = [];
    let tmp;
    function  isConsonant(char) {
        return /[^aeiou]/.test(char);
    }

    if(!isConsonant(str.charAt(0))) {
        return str + " way";
    } else {
        strArr = str.split("");
    }
    while (isConsonant(strArr[0]) && !isConsonant(str)) {
        tmp = strArr.shift();
        strArr.push(tmp);
    }
    return strArr.join("") + "ay";
}
console.log(myPigLatin("ddqd"));
/* ------------------------------------------------------------------------------------------------------------------- */

/* Promise.All native implementation */
/* ------------------------------------------------------------------------------------------------------------------- */
function Promise_All(promises) {
    return new Promise((resolve, reject) => {
        let  results = [];
        let pending = promises.length;
        for(let i = 0; i < promises.length; i++) {
            promises[i].then(result => {
                results[i] = result;
                pending--;
                if(pending == 0) resolve(results);
            }).catch(reject);
        }
        if(promises.length == 0) resolve(results);
    });
}

Promise_All([]).then(array => {
    console.log(array);
});
function  soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val),Math.random()*300);
    });
}
 Promise_All([soon(1), soon(2), soon(3)]).then(array => {
     console.log((array));
 });

Promise_All([soon(1), Promise.reject("X"),soon(3)]).then(array => {
    console.log("Wrong path", array);
}).catch(error => {
    if (error !== "X") console.log("fail: ", error);
});

/* ------------------------------------------------------------------------------------------------------------------- */
/* Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence. */
function myReplace(str, before, after) {
  let strArr = str.split(" ");
  if(before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1,);
  }
  strArr[strArr.indexOf(before)] = after;
  return strArr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");

/* The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array. */
function pairElement(str) {
  let strArr = str.split("");
  let DNA = [];
  strArr.forEach(el => {
      switch (el) {
      case "C":
        DNA.push([el,"G"]);
        break;
      case "G":
        DNA.push([el,"C"]);
        break;
      case "A":
        DNA.push([el,"T"]);
        break;
      case "T":
        DNA.push([el,"A"]);
        break;
      }
    });
  return DNA;
}

pairElement("GCG");
pairElement("TTGAG");
/* DNA solution with objects & map()*/
    function pairElement1(str) {
    //create object for pair lookup
    var pairs = {
      "A": "T",
      "T": "A",
      "C": "G",
      "G": "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x,pairs[x]]);
  }

  //test here
  pairElement("GCG");
    /* --------------------------------------------------------------------------------------------------------------- */

// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.
//
// If all letters are present in the range, return undefined.
// My solution
function fearNotLetter(str) {
    let strArr = str.split("");
    let alphaRange = [];
    let regExp = new RegExp('[' + str +']');
    for(let i = 97; i <= 122; i++) {
  	    alphaRange.push(i);
    }
    alphaRange = alphaRange.map(el => String.fromCharCode(el));
    if(alphaRange.length === strArr.length) return undefined;
    alphaRange.splice(alphaRange.indexOf(strArr[strArr.length - 1]),);
    if(alphaRange[0] !== strArr[0]) {
  	    alphaRange.splice(0,alphaRange.indexOf(strArr[0]));
    }
 	str = alphaRange.filter(el => !regExp.test(el));
 	return str.join("");
}

fearNotLetter("abce");
fearNotLetter("stvwx");
//Better Solutions
/* ---------------------- */
function fearNotLetter1(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
/* -------------------- */
function fearNotLetter2(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

