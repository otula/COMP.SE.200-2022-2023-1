import ceil from "./ceil.js"

test("ceil 1", () => {
  expect(ceil(1)).toBe(1)
})

test("ceil -1.5", () => {
  expect(ceil(-1.5)).toBe(-1)
})

test("ceil 0.111111 with precision of 3", () => {
  expect(ceil(0.111111, 3)).toBe(0.112)
})

test("ceil item price to match cent precision", () => {
  expect(ceil(115.14555, 2)).toBe(115.15)
})

test("ceil very minimal number", () => {
  expect(ceil(88.8e-44444, 444444)).toBe(0)
})
