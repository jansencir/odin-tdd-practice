export default function reverseString(string) {
  let reverseString = ""
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string.substr(i, 1);
  }
  return reverseString;
};