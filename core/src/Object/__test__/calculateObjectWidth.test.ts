import { calculateObjectWidth } from "../calculateObjectWidth";

test("calculateObjectWidth", () => {
  expect(calculateObjectWidth({ width: 4, scaleX: 2 } as any)).toBe(8);
});
