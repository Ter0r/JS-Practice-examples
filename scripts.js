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

/* Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays. */
function uniteUnique(...arrays) {
  const flat = [].concat(...arrays);

  return [...new Set(flat)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
/* Sum Of Odd Fibonacci Numbers */
function sumFibs(num) {
	let start = 0;
  let next = 1;
  let current;
  let sumOdd = 0;
  for(let i = 0; i <= num; i++) {
  	current = start + next;
    start = next;
    next = current;
    if (current % 2 !== 0 && current <= num) sumOdd += current;
  }
  return sumOdd + 1;
}
console.log(sumFibs(5));

/* Sum All Primes */
function sumPrimes(num) {
  let current = 0;

  function isPrime(digit) {
    for(let i = 2; i < digit; i++) {
      if(digit % i === 0) return false;
    }
    return digit > 1;
  }

  while(num >= 0) {
    if(isPrime(num)) {
      current += num;
    }
    num--;
  }
  return current;
}

console.log(sumPrimes(977));

/*
    Intermediate Algorithm Scripting: Smallest Common Multiple
    Find the smallest common multiple of the provided parameters that can be evenly divided by both,
    as well as by all sequential numbers in the range between these parameters.
 * */

/*  Flatten Nested Arrays
*
*
* */
function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

flattenArray([1, [2], [3, [[4]]]]);
/*
* From binary to Strings
* */

function binaryAgent(str) {
  let res = str.split(" ");
  return res.map(it => String.fromCharCode(parseInt(it,2))).join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/*
* Intermediate Algorithm Scripting: Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

* */
function truthCheck(collection, pre) {
  return collection.every(item => {
      return item.hasOwnProperty(pre) && item[pre]; // Or it might have been without item.hasOwnProperty(pre) check, works fine without it.
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": 0}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

/*
*  Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
*   My non-optimized solution
*  */
function addTogether() {
  if([].concat(...arguments)
  .some(el => typeof el !== 'number' && !Array.isArray(el))) return undefined;
  console.log([].concat(...arguments));
  let current = arguments[0];
  if(arguments[1]) return current += arguments[1];
  function f(b) {
    if(Array.isArray(b)) return undefined;
    return current += b;
  }
  return f;
}
console.log(addTogether(2, [3]));
/* some advanced solutiom*/
    function addTogether1() {
      var args = Array.from(arguments);
      return args.some(n => typeof n !== 'number') ?
        undefined:
        args.length > 1 ?
          args.reduce((acc, n) => acc += n, 0):
          (n) => typeof n === "number" ?
            n + args[0]:
            undefined;
    }

    // test here
    addTogether1(2,3);
 /* Calculate Orbital Period from given constants */
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  arr.forEach(item => {
  	let tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
    delete item.avgAlt;
    item.orbitalPeriod = tmp;
  });
  return arr;
}
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
/* Check if Palendrome
*   My Grotesque Solution
* */
function palindrome(str) {
  let jaja = str.replace(/[\W_]/g, '').toLowerCase();
  let reversed = jaja.split("");
  for (let i = 0; i < jaja.length/2; i++) {
    let temp = reversed[i];
    reversed[i] = reversed[reversed.length - 1 - i];
    reversed[reversed.length - 1 - i] = temp;
  }
  if(reversed.join("") === jaja) return true;
  return false;
}

palindrome("_eye");

// Cool Solution
 function palindrome_Cool(str) {
      return str.replace(/[\W_]/g, '').toLowerCase() ===
             str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
    }
 palindrome_Cool("i am Cool");

 /*
 * GENIUS SOLUTION
 * NOT MINE
 * */
     //this solution performs at minimum 7x better, at maximum infinitely better.
    //read the explanation for the reason why. I just failed this in an interview.
    function palindrome_Genius(str) {
      //assign a front and a back pointer
      let front = 0
      let back = str.length - 1

      //back and front pointers won't always meet in the middle, so use (back > front)
      while (back > front) {
        //increments front pointer if current character doesn't meet criteria
        if ( str[front].match(/[\W_]/) ) {
          front++
          continue
        }
        //decrements back pointer if current character doesn't meet criteria
        if ( str[back].match(/[\W_]/) ) {
          back--
          continue
        }
        //finally does the comparison on the current character
        if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false
        front++
        back--
      }

      //if the whole string has been compared without returning false, it's a palindrome!
      return true

    }

  palindrome_Genius("yeah, i am genius");

