import { calculateObjectHeight } from "../calculateObjectHeight";

test("calculateObjectHeight", () => {
  expect(calculateObjectHeight({ height: 5, scaleY: 4 } as any)).toBe(20);
});
