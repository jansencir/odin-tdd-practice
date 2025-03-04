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
})

// Test 2 - Ciphers text that wraps (goes from z to a);
test("Ciphers text that wraps", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("tuvwxyz", 7)).toBe("abcdefg");
})

// Test 3 - Ciphers lower-case and upper-case letter-only string
test("Lower and upper-case strings", () => {
  expect(caesarCipher("DoG", 2)).toBe("FqI");
  expect(caesarCipher("cAt", 4)).toBe("gEx");
})

// Test 4 - Ciphers a lower-case number & symbol containing string
test("Lower-case number & symbol containing string", () => {
  expect(caesarCipher("dog1!", 2)).toBe("fqi1!");
  expect(caesarCipher("cat??222", 4)).toBe("gex??222");
})

// Test 5 - Ciphers a lower and upper-case number & symbol containing string
test("Lower and upper-case number & symbol containing string", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})