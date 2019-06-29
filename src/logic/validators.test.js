import { isValidStart, isValidStartAndSize } from "./validators";

test("isValidStart: '3 3 Na'", () => {
  expect(isValidStart("3 3 Na")).toBe(false);
});

test("isValidStartAndSize: ", () => {
  expect(isValidStartAndSize("3 3 N", "5 5")).toBe(true);
  expect(isValidStartAndSize("3 5 N", "3 3")).toBe(false);
  expect(isValidStartAndSize("5 3 N", "3 3")).toBe(false);
});
