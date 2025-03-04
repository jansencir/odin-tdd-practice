export default function analyzeArray(array) {
  // Declare an object to hold the numbers
  let object = {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  };

  // Order the array from smallest to largest
  // Set min to the first number
  // Set max to the highest number
  // Set length to length
  // Sum up the array, and set it 
  let sortedArray = array.sort((a, b) => a - b);
  // console.log(sortedArray);

  object.average = getAverage(array);
  object.min = sortedArray[0];
  object.max = sortedArray[sortedArray.length - 1];
  object.length = array.length;
  return object;
}

function getAverage (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / (array.length);
}