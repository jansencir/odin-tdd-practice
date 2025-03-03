export default function capitalize(string) {
  // Check if the item being passed in is a string
  if (typeof(string) !== "string") {
    return "Not a string.";
  }

  // Remove white space and turn the string into an array
  let stringArray = string.trim().split("");
  
  // Iterate through the array
  // While the current item is not a letter, keep going
  // Once a letter is hit, return that letter capitalized
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].match(/[a-zA-Z]/)) {
      stringArray[i] = stringArray[i].toUpperCase();
      return stringArray.join("");
    }
  }
}