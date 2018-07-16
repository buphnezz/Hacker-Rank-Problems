'use strict';

const traverseHourGlass = (arr) => {
  for (let i = 0; arr.length - 3; i++) {
    for (let j = 0; arr.length - 3; j++) {
      let largestValue = 0;
      const hourGlassSum = arr[i][j] + arr[i + 1][j] + arr[i + 2][j] +
        arr[i + 1][j + 1] +
        arr[i][j + 2] + arr[i + 1][j + 2] + arr[i + 2][j + 2];
      if (hourGlassSum > largestValue) {
        largestValue = hourGlassSum;
      }
    }
  }
  return traverseHourGlass;
};

// 1 2 3 4 5 6 
// 2 3 4 5 6 7
// 3 4 5 6 7 8 
// 4 5 6 7 8 9 
// 5 6 7 8 9 1
// 6 7 9 9 8 4 