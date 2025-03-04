export default function caesarCipher(string, shift) {
  let stringArray = Array.from(string);

  // Make a string of the alphabet as lower and upper case
  let alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Make an array of the alphabets for lower and upper case
  let alphabetArrayLower = Array.from(alphabetLower);
  let alphabetArrayUpper = Array.from(alphabetUpper);

  // Create a new array that's been shifted
  let shiftedArrayLower = Array.from(shiftArray(alphabetLower, shift));
  let shiftedArrayUpper = Array.from(shiftArray(alphabetUpper, shift));

  // Create an array that calls the cipher controller
  let cipheredArray = Array.from(arrayCipherController(stringArray, alphabetArrayLower, alphabetArrayUpper, shiftedArrayLower, shiftedArrayUpper));

  console.log(cipheredArray.join(""));
  return cipheredArray.join("");
}

// Return an array of the shifted alphabet
function shiftArray(alphabetArray, shift) {
  let plainArray = Array.from(alphabetArray);
  let cipherArray = [];

  for (let i = 0; i < plainArray.length; i++) {
    let current = plainArray[(i + shift) % (plainArray.length)];
    cipherArray.push(current);
  }
  return cipherArray;
}

// Takes the string as an array and ciphers it
function arrayCipherController(stringArray, alphabetArrayLower, alphabetArrayUpper, shiftedArrayLower, shiftedArrayUpper) {
  let array = [];
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].match(/[a-z]/)) {
      array.push(pushCharacter(stringArray[i], alphabetArrayLower, shiftedArrayLower))
    } else if (stringArray[i].match(/[A-Z]/)) {
      // Perform uppercase operation
      array.push(pushCharacter(stringArray[i], alphabetArrayUpper, shiftedArrayUpper))
    } else {
      array.push(stringArray[i])
    }
  }
  return array;
}

// Pushes the ciphered character
function pushCharacter(character, alphabetArray, shiftedArray) {
  for (let i = 0; i < alphabetArray.length; i++) {
    if (character == alphabetArray[i]) {
      return shiftedArray[i];
    }
  }
}