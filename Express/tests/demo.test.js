function sum(a, b) {
  return a + b;
}

test("sum of 1 & 2 should be 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sum of 4 & 6 should not be 3", () => {
  expect(sum(4, 6)).not.toBe(3);
});

//------------------------- JEST MATCHER ---------------------------------
