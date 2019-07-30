"use strict";

function countNeighbours(data, row, col) {
    let s = 0,
        NEIGHBOURS = [[-1, 1], [-1, 0], [-1, -1], [0, 1], [0,-1], [1, 1], [1, 0], [1, -1]];
    for (let a of NEIGHBOURS) {
            let x = row + a[0],
                y = col + a[1];
            if(data[x] && data[x][y]) s++;
    }
    return s;
}

console.log(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 1, 2));
console.log(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 0, 0));

console.log(countNeighbours([[1, 1, 1],
                                  [1, 1, 1],
                                  [1, 1, 1]], 0, 2));

console.log(countNeighbours([[0, 0, 0],
                                  [0, 1, 0],
                                  [0, 0, 0]], 1, 1));

