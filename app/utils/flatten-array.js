/* eslint no-unused-vars: "off"*/

/* Task:
  Write a function that will flatten an array of arbitrarily nested arrays of integers into a flat array of integers.
  e.g. [[1,2,[3]],4] → [1,2,3,4]. If the language you're using has a function to flatten arrays, you should pretend it doesn't exist.

  You can use the code below to test it:
  let array = [1,2,3, ['A', 'B'], 4, 5, ['C', 'D', ['1E', '2E']]];
  flatten1(array); // [1, 2, 3, "A", "B", 4, 5, "C", "D", "1E", "2E"]
  flatten2(array); // [1, 2, 3, "A", "B", 4, 5, "C", "D", "1E", "2E"]
*/

// Solution 1
let flatten1 = (array) => {
  let flatArray = [];
  let flattenArray = (array) => {
    array.forEach(element => {
      if (Array.isArray(element)) {
        flattenArray(element);
      } else {
        flatArray.push(element);
      }
    });
  }
  flattenArray(array);
  return flatArray;
};

// Solution 2
let flatten2 = (array) => {
  return array.reduce((a, b) => {
    if (Array.isArray(b)) {
      return [].concat(a, flatten(b));
    }
    return [].concat(a, b);
  })
}

// solution 2 as one-liner
export default function flatten(ary) {
  return ary.reduce((a, b) => [].concat(a, Array.isArray(b) ? flatten(b) : b));
}
