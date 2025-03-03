export default function calculator(x, y, op) {
  if (op === "add") {
    return x + y;
  } else if (op === "subtract") {
    return x - y;
  } else if (op === "multiply") {
    return x * y;
  } else if (op === "divide") {
    return x / y;
  }
}