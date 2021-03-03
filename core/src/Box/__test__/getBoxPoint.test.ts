import { getBoxPoint } from "../getBoxPoint";

test("getAbsoluteBoxPoint", () => {
  const box = [
    [0, 0],
    [10, 1],
    [5, 50],
    [20, 20],
  ] as const;

  expect(getBoxPoint(box, "min", "x")).toBe(0);
  expect(getBoxPoint(box, "min", "y")).toBe(0);
  expect(getBoxPoint(box, "max", "x")).toBe(20);
  expect(getBoxPoint(box, "max", "y")).toBe(50);
});
