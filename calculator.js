export default function calculator(x, y, op) {
  if (x === undefined || y === undefined || op === undefined) {
    return "Missing argument(s)";
  }
  
  // Make calculations
  if (op === "add") {
    return parseFloat(x) + parseFloat(y);
  } else if (op === "subtract") {
    return parseFloat(x) - parseFloat(y);
  } else if (op === "multiply") {
    return parseFloat(x) * parseFloat(y);
  } else if (op === "divide") {
    return parseFloat(x) / parseFloat(y);
  }
}