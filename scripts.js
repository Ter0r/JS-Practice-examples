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

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("ddqd"));
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
    console.log("Wrong path");
}).catch(error => {
    if (error !== "X") console.log("fail: ", error);
})

/* ------------------------------------------------------------------------------------------------------------------- */
