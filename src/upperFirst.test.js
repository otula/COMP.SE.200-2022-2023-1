import upperFirst from './upperFirst.js'

test("undefined is transformed to empty string", () => {
  expect(upperFirst(undefined)).toStrictEqual("");
});

test("NaN is transformed to empty string", () => {
  expect(upperFirst(NaN)).toStrictEqual("");
});

test("myteststring is transformed to Myteststring", () => {
  expect(upperFirst("myteststring")).toStrictEqual("Myteststring");
});

test("Myteststring is transformed to Myteststring", () => {
  expect(upperFirst("Myteststring")).toStrictEqual("Myteststring");
});

test("123test123 is transformed to 123test123", () => {
  expect(upperFirst("123test123")).toStrictEqual("123test123");
});
test("🛹 is transformed to 🛹", () => {
  expect(upperFirst("🛹")).toStrictEqual("🛹");
});
