import { calculateObjectHeight } from "../calculateObjectHeight";
import { calculateObjectSize } from "../calculateObjectSize";

const exampleObject = { height: 5, scaleY: 4 };

test("calculateObjectHeight", () => {
  const height = calculateObjectHeight(exampleObject as any);
  expect(height).toBe(20);
  expect(height).toBe(calculateObjectSize("height")(exampleObject as any));
});
