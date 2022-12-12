import map from "./map.js";

test("square list of numbers", () => {
  const square = (n) => n * n;

  expect(map([4, 8], square)).toStrictEqual([16, 64]);
});

test("Transform name-properties uppercase for list of objects", () => {
  const toUpper = ({ name }) => name.toUpperCase();

  expect(map([{ id: 1234, name: "item1" }, { id: 4321, name: "item2" },], toUpper)).toMatchSnapshot();
});

test("map over empty array", () => {
  expect(map([], null)).toStrictEqual([]);
});

test("use map to reverse order of items in array", () => {
  const reverse = (_, index, array) => array[array.length - 1 - index]
  expect(map([1, 2, 3, 4], reverse)).toStrictEqual([4, 3, 2, 1]);
});
