"use strict";

function weakPoint(matrix){
    let row = [];
    let col = [];
    for (let i in matrix) {
        row.push(matrix[i].reduce((a,b) => a + b));
        let j = 0;
        let meh = [];
        while( j < matrix[i].length) {
            let some = 0;
            some += matrix[j][i];
            meh.push(some);
            j++;
        }
        col.push(meh.reduce((a,b) => a+b));
    }
    let x = row.indexOf(Math.min.apply(null, row));
    let y = col.indexOf(Math.min.apply(null, col));
    return [x,y];
}

console.log(weakPoint(  [[7, 2, 7, 2, 8],
                                [2, 9, 4, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ));
// -> [3,3]

console.log(weakPoint(  [[7, 2, 4, 2, 8],
                                [2, 8, 1, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ));
// -> [1, 2]

console.log(weakPoint(  [[1, 1, 1],
                                [1, 1, 1],
                                [1, 1, 1]]
                                ));
// -> [0, 0]