/**Reverse String Tests
 * Reverses a basic string
 * Reverse complicated string
 */
import reverseString from "./reverseString.js";

// Test 1 - Reverse a basic string
test("Returns a basic string", () => {
  let testString = "Mango mango";
  expect(reverseString(testString)).toBe("ognam ognaM");
})

// Test 2 - Reverse a complicated string
test("Returns a basic string", () => {
  let testString = "    $Mango?! How about a Mango?!!!  ";
  expect(reverseString(testString)).toBe("  !!!?ognaM a tuoba woH !?ognaM$    ");
})