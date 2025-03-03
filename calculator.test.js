/**Calculator Tests
 * Adds two numbers
 * Subtracts two numbers
 * Multiplies two numbers
 * Divides two numbers
 * Works on decimals
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