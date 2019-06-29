import { newDir, newPos, calculatePosition } from "./movements";

test("calculatePosition", () => {
  const size = { x: 5, y: 5 };

  let position = { pos: { x: 1, y: 2 }, dir: "N" };
  let instructions = "LMLMLMLMM";
  let expected = { pos: { x: 1, y: 3 }, dir: "N" };
  expect(calculatePosition(position, instructions.split(""), size)).toEqual(
    expected
  );

  position = { pos: { x: 3, y: 3 }, dir: "E" };
  instructions = "MMRMMRMRRM";
  expected = { pos: { x: 5, y: 1 }, dir: "E" };
  expect(calculatePosition(position, instructions.split(""), size)).toEqual(
    expected
  );

  position = { pos: { x: 3, y: 2 }, dir: "W" };
  instructions = "LMRMLM";
  expected = { pos: { x: 2, y: 0 }, dir: "S" };
  expect(calculatePosition(position, instructions.split(""), size)).toEqual(
    expected
  );
});

test("newDir: turn right", () => {
  expect(newDir("N", "R")).toBe("E");
  expect(newDir("E", "R")).toBe("S");
  expect(newDir("S", "R")).toBe("W");
  expect(newDir("W", "R")).toBe("N");
});

test("newDir: turn left", () => {
  expect(newDir("N", "L")).toBe("W");
  expect(newDir("E", "L")).toBe("N");
  expect(newDir("S", "L")).toBe("E");
  expect(newDir("W", "L")).toBe("S");
});

test("newPos: move forward (no edges)", () => {
  const size = { x: 5, y: 5 };
  const pos = { x: 3, y: 3 };
  expect(newPos({ dir: "N", pos: pos }, size)).toEqual({ x: 3, y: 4 });
  expect(newPos({ dir: "E", pos: pos }, size)).toEqual({ x: 4, y: 3 });
  expect(newPos({ dir: "S", pos: pos }, size)).toEqual({ x: 3, y: 2 });
  expect(newPos({ dir: "W", pos: pos }, size)).toEqual({ x: 2, y: 3 });
});

test("newPos: move forward (edges)", () => {
  const size = { x: 5, y: 5 };
  expect(newPos({ dir: "N", pos: { x: 3, y: 5 } }, size)).toEqual({
    x: 3,
    y: 5
  });
  expect(newPos({ dir: "E", pos: { x: 5, y: 3 } }, size)).toEqual({
    x: 5,
    y: 3
  });
  expect(newPos({ dir: "S", pos: { x: 2, y: 0 } }, size)).toEqual({
    x: 2,
    y: 0
  });
  expect(newPos({ dir: "W", pos: { x: 0, y: 2 } }, size)).toEqual({
    x: 0,
    y: 2
  });
});
