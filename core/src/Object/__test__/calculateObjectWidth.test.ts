import { calculateObjectSize } from "../calculateObjectSize";
import { calculateObjectWidth } from "../calculateObjectWidth";

const exampleObject = { width: 4, scaleX: 2 };

test("calculateObjectWidth", () => {
  const width = calculateObjectWidth(exampleObject as any);
  expect(width).toBe(8);
  expect(width).toBe(calculateObjectSize("width")(exampleObject as any));
});
