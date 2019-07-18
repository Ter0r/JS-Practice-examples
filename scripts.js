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
