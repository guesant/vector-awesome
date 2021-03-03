import { getAbsoluteBoxPoints } from "../getAbsoluteBoxPoints";

test("getAbsoluteBoxPoint", () => {
  expect(
    getAbsoluteBoxPoints([
      [0, 0],
      [10, 1],
      [5, 50],
      [20, 20],
    ] as const),
  ).toEqual([0, 0, 20, 50]);
});
