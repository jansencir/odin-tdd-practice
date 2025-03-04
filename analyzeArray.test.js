/**Analyze Array Tests
 * Returns an object containing: average, min, max, & length
 * Returns 0 for everything if passed an empty array
 * Works on an array of negative and positive numbers
 * Works on an array of just negative numbers
 */

import analyzeArray from "./analyzeArray.js";

// Test 1 - Returns an object containing; average, min, max, & length
test("Works on a simple array", () => {
  let testArray = [5, 2, 4, 3, 1]
  expect(analyzeArray(testArray)).toEqual(
    { average: 3, min: 1, max: 5, length: 5 }
  )
})

// Test 2 - Returns 0 for everything if passed an empty array
test("Works on an empty array", () => {
  let testArray = [];
  expect(analyzeArray(testArray)).toEqual(
    { average: 0, min: 0, max: 0, length: 0 }
  )
})

// Test 3 - Works on an array of negative and positive numbers
test("Works on an array of negative and positive numbers", () => {
  let testArray = [5, -10, -4, 3, 18, 21];
  expect(analyzeArray(testArray)).toEqual(
    { average: 5.5, min: -10, max: 21, length: 6 }
  )
})

// Test 4 - Works on an array of just negative numbers
test("Works on an array of just negative numbers", () => {
  let testArray = [-2, -19, -3, -5, -8];
  expect(analyzeArray(testArray)).toEqual(
    { average: -7.4, min: -19, max: -2, length: 5 }
  )
})