export default function capitalize(string) {
  if (typeof(string) !== "string") {
    return "Not a string.";
  }

  let stringArray = string.trim().split("");
  stringArray[0] = stringArray[0].toUpperCase();
  return stringArray.join("");
}