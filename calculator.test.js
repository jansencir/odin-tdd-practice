/**Calculator Tests
 * Adds two numbers
 * Subtracts two numbers
 * Multiplies two numbers
 * Divides two numbers
 * Works on decimals
 * Converts string of a number to type number
 * Checks for type (x and y should be numbers, op should be a string)
 */

import calculator from "./calculator.js";

// Test 1 Addition
test("Adds two numbers together", () => {
  expect(calculator(2, 2, "add")).toBe(4);
  expect(calculator(-5, -2, "add")).toBe(-7);
  expect(calculator(100, -20, "add")).toBe(80);
  expect(calculator(0, 0, "add")).toBe(0);
})

// Test 2 Subtraction
test("Subtracts two numbers together", () => {
  expect(calculator(10, 5, "subtract")).toBe(5);
  expect(calculator(100, -35, "subtract")).toBe(135);
  expect(calculator(-20, -25, "subtract")).toBe(5);
  expect(calculator(0, 0, "subtract")).toBe(0);
})

// Test 3 Multiplication
test("Multiplies two numbers together", () => {
  expect(calculator(3, 3, "multiply")).toBe(9);
  expect(calculator(4, -8, "multiply")).toBe(-32);
  expect(calculator(-5, -5, "multiply")).toBe(25);
  expect(calculator(0, 3, "multiply")).toBe(0);
})

// Test 4 Division
test("Divides two numbers together", () => {
  expect(calculator(56, 8, "divide")).toBe(7);
  expect(calculator(81, -9, "divide")).toBe(-9);
  expect(calculator(-12, -3, "divide")).toBe(4);
  expect(calculator(0, 1, "divide")).toBe(0);
})

// Test 5 Decimals
test("Works on decimals", () => {
  expect(calculator(5.5, 3.75, "add")).toBe(9.25);
  expect(calculator(8, 2.2, "subtract")).toBe(5.8);
  expect(calculator(2.5, 3, "multiply")).toBe(7.5);
  expect(calculator(7, 2, "divide")).toBe(3.5);
})

// Test 6 Convert string number to real number
test("Works on string of numbers", () => {
  expect(calculator("3", "3", "add")).toBe(6);
  expect(calculator("-7", "-3", "subtract")).toBe(-4);
  expect(calculator("9", "9", "multiply")).toBe(81);
  expect(calculator("10", "4", "divide")).toBe(2.5);
})

// Test 7 Argument Type
// test("Checks the type of the arguments to make sure they're valid", () => {
//   expect(calculator()).toBe("Missing numbers");
//   expect(calculator(3, 3)).toBe("Missing or invalid operator");
// })