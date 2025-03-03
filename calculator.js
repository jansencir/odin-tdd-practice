export default function calculator(x, y, op) {
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