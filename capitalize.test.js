/**Capitalize Tests
 * Capitalizes the first letter
 * Excessive spaces
 * Not a string
 * First letter is already capital
 * First character is a number
 * First character is a symbol
 */

import capitalize from "./capitalize.js"

test("Capitalizes the first letter in a basic string", () => {
  let testString = "the wheels on the bus go round and round.";
  expect(capitalize(testString)).toBe("The wheels on the bus go round and round.")
})

test("Capitalizes the first letter despite excessive spaces", () => {
  let testString = "    the wheels on the bus go round and round.";
  expect(capitalize(testString)).toBe("The wheels on the bus go round and round.")
})

test("Checks if it's a string", () => {
  let testObject = {name: "name"};
  expect(capitalize(testObject)).toBe("Not a string.");
})

test("First letter is already capital", () => {
  let testString = "The wheels on the bus go round and round.";
  expect(capitalize(testString)).toBe("The wheels on the bus go round and round.")
})

test("First character is a number", () => {
  let testString = "222the wheels on the bus go round and round.";
  expect(capitalize(testString)).toBe("222The wheels on the bus go round and round.")
})

test("First character is a symbol", () => {
  let testString = "?!?!the wheels on the bus go round and round.";
  expect(capitalize(testString)).toBe("?!?!The wheels on the bus go round and round.")
})