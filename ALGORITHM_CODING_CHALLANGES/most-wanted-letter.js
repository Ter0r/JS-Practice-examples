"use strict";

function mostWanted(data) {
    let string = data.replace(/[\W]/g,'').toLowerCase().split('').map(el => el.charCodeAt()).sort((a,b) => a-b);
    function commonEl(array) {
        let mf = 1,
            m = 0,
            item;
        for (var i = 0; i < array.length; i++) {
          for (var j = i; j < array.length; j++) {
            if (array[i] == array[j]) m++;
            if (mf < m) {
              mf = m;
              item = array[i];
            }
          }

        m = 0;
        }
        return item;
    }
    if(!commonEl(string)) return  String.fromCharCode(Math.min(...string));
    return String.fromCharCode(commonEl(string));
}

    console.log(mostWanted("How do you do?"));
    console.log(mostWanted("One"));
    console.log(mostWanted("Oops!"));
    console.log(mostWanted("AAaooo!!!!"));