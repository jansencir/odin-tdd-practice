export default function caesarCipher(string, shift) {
  let stringArray = Array.from(string);

  // Make a string of the alphabet
  let alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArray = Array.from(alphabetLower);
  console.log(alphabetArray);

  // Create a new array that's been shifted
  let shiftedLowerCase = Array.from(shiftArray(alphabetLower, shift));
  console.log(shiftedLowerCase);

  // Declare a string to hold the ciphered array
  // For each letter in the string:
  // --if the letter equals the letter in the alphabet
  // ----take the position of that letter
  // ----grab the corresponding index in the shifterLowerCase array, whatever letter that is
  // ------push it into the ciphered array
  // for (i = 0; i < string.length - 1; i++) {

  let cipheredArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    for (let j = 0; j < alphabetArray.length; j++) {
      if (stringArray[i] == alphabetArray[j]) {
        cipheredArray.push(shiftedLowerCase[j]);
      }
    }
  }
  console.log(cipheredArray.join(""));
  return cipheredArray.join("");
}

// Return an array of the shifted alphabet
function shiftArray(alphabet, shift) {
  let plainArray = Array.from(alphabet);
  let cipherArray = [];

  for (let i = 0; i < plainArray.length - 1; i++) {
    // You are adding characters to cipherArray, but it will be the shifted version
    // Get the letter at plainArray, but add the shift to i
    // Whatever that letter is, .push(letter) to cipherArray
    let current = plainArray[(i + shift) % (plainArray.length - 1)];
    cipherArray.push(current);
  }
  return cipherArray
}

// Notes:
// --If the character does not match /[a-zA-Z]/, return character