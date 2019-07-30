"use strict";

function longRepeat(line) {
    // length the longest substring that consists of the same char
    let count = 0,
        long = 0,
        curr = 1;

    if(line.length === 0) return 0;
    while (count < line.length) {
        if (line[count] != line[count + 1]) curr = 1;
        else curr += 1;
        if (curr > long) long = curr;
        count++;
    }

    return long;
}

console.log(longRepeat('sdsffffse'));
console.log(longRepeat('ddvvrwwwrggg'));