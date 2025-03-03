/**Caesar Cipher Test
 * Ciphers a lower-case letter-only string
 * Ciphers text that wraps (goes from z to a);
 * Ciphers a lower and upper-case letter-only string
 * Ciphers a lower-case number & symbol containing string
 * Ciphers a lower and upper-case number & symbol containing string
 */

import caesarCipher from "./caesarCipher.js";

// Test 1 - Ciphers a lower-case letter-only string
test("Lower-case letter-only strings", () => {
  expect(caesarCipher("dog", 2)).toBe("fqi");
  expect(caesarCipher("cat", 4)).toBe("gex");
});