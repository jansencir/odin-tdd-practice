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