import toNumber from "./toNumber.js";

test("transform item price from string to number", () => {
  expect(toNumber("123")).toStrictEqual(123);
});

test("number will be still number", () => {
  expect(toNumber(321)).toStrictEqual(321);
});

test("undefined is transformed to NaN", () => {
  expect(toNumber(undefined)).toStrictEqual(NaN);
});