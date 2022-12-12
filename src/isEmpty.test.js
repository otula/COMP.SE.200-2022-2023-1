import isEmpty from "./isEmpty.js";

test("string is not empty", () => {
  expect(isEmpty("123")).toBe(false);
});

// this should pass so there is a bug in the isEmpty function 
test("123 int is not empty", () => {
  expect(isEmpty(123)).toBe(false);
});
test("undefined is not empty", () => {
  expect(isEmpty(undefined)).toBe(true);
});
test("null is not empty", () => {
  expect(isEmpty(null)).toBe(true);
});
test("NaN is not empty", () => {
  expect(isEmpty(NaN)).toBe(true);
});
test("0 is not empty", () => {
  expect(isEmpty(0)).toBe(true);
});
test("empty string is empty", () => {
  expect(isEmpty(0)).toBe(true);
});
test("empty array is empty", () => {
  expect(isEmpty([])).toBe(true);
});
test("empty object is empty", () => {
  expect(isEmpty({})).toBe(true);
});
