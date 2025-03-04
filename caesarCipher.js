export default function caesarCipher(string, shift) {
  let stringArray = Array.from(string);

  // Make a string of the alphabet as lower and upper case
  let alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Make an array of the alphabets for lower and upper case
  let alphabetArrayLower = Array.from(alphabetLower);
  let alphabetArrayUpper = Array.from(alphabetUpper);
  console.log(alphabetArrayLower);
  console.log(alphabetArrayUpper);

  // Create a new array that's been shifted
  let shiftedArrayLower = Array.from(shiftArray(alphabetLower, shift));
  let shiftedArrayUpper = Array.from(shiftArray(alphabetUpper, shift));
  console.log(shiftedArrayLower);
  console.log(shiftedArrayUpper);

  // Declare a string to hold the ciphered array
  // For each letter in the string:
  // --if the letter equals the letter in the alphabetLower
  // ----take the position of that letter
  // ----grab the corresponding index in the shifterLowerCase array, whatever letter that is
  // ------push it into the ciphered array
  // for (i = 0; i < string.length - 1; i++) {

  // Create an array that calls the cipher controller
  // let cipheredArray = Array.from(pushCipherArray(stringArray, alphabetArrayLower, shiftedArrayLower));
  let cipheredArray = Array.from(arrayCipherController(stringArray, alphabetArrayLower, alphabetArrayUpper, shiftedArrayLower, shiftedArrayUpper));

  console.log(cipheredArray.join(""));
  return cipheredArray.join("");
}

// Return an array of the shifted alphabet
function shiftArray(alphabetArray, shift) {
  let plainArray = Array.from(alphabetArray);
  let cipherArray = [];

  for (let i = 0; i < plainArray.length; i++) {
    // You are adding characters to cipherArray, but it will be the shifted version
    // Get the letter at plainArray, but add the shift to i
    // Whatever that letter is, .push(letter) to cipherArray
    let current = plainArray[(i + shift) % (plainArray.length)];
    cipherArray.push(current);
  }
  return cipherArray;
}

// 222
function arrayCipherController(stringArray, alphabetArrayLower, alphabetArrayUpper, shiftedArrayLower, shiftedArrayUpper) {
  // Iterate through the string in here
  // Make the checks
  // Append whatever the checks spit out into the same array (probably have to declare the array in here)
  // Return the array at the end
  
  // The checks
  // if (string[i].match(/[a-z]/)) { run this function }
  // else if (string[i].match(/[A-Z]/)) { run the same function that upper-cases it at the end }
  // else (return the character-anything but a letter pretty much)
  let array = [];
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].match(/[a-z]/)) {
      array.push(pushCharacter(stringArray[i], alphabetArrayLower, shiftedArrayLower))
    } else if (stringArray[i].match(/[A-Z]/)) {
      // Perform uppercase operation
      array.push(pushCharacter(stringArray[i], alphabetArrayUpper, shiftedArrayUpper))
    }
  }
  return array;
}

// function pushCipherArray(stringArray, alphabetArray, shiftedArray) {
//   let array = []
//   for (let i = 0; i < stringArray.length; i++) {
//     for (let j = 0; j < alphabetArray.length; j++) {
//       if (stringArray[i] == alphabetArray[j]) {
//         array.push(shiftedArray[j]);
//       }
//     }
//   }
//   return array;
// }

function pushCharacter(character, alphabetArray, shiftedArray) {
  // Take the current letter (character)
  // Declare index = ""
  // Iterate over the alphabets in alphabetArray until you get a match
  // --Whatever [i] is, set it to index
  // return shiftedArray[i];

  // let index;
  for (let i = 0; i < alphabetArray.length; i++) {
    if (character == alphabetArray[i]) {
      return shiftedArray[i];
    }
  }
}


// console.log(caesarCipher("dOggY", 2));

// Notes:
// --If the character does not match /[a-zA-Z]/, return character
// 222: Figure out how to work with mixed-case letters
// --If the letter is upper-case
// ----do the same exact things you do to lower-case, but toUpperCase() it before adding it to the array
// --Else, return the character (assuming it's anything but a letter);