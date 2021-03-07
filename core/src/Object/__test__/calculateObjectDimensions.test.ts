import { calculateObjectDimensions } from "../calculateObjectDimensions";
import { calculateObjectHeight } from "../calculateObjectHeight";
import { calculateObjectWidth } from "../calculateObjectWidth";

const exampleObject = {
  width: 10,
  scaleX: 20,
  height: 5,
  scaleY: 5,
} as const;

test("calculateObjectDimensions", () => {
  const { width, height } = calculateObjectDimensions(exampleObject as any);
  expect(width).toBe(calculateObjectWidth(exampleObject as any));
  expect(height).toBe(calculateObjectHeight(exampleObject as any));
});
