import { calculateObjectSize } from "../calculateObjectSize";

const exampleObject = {
  width: 10,
  scaleX: 20,
  height: 5,
  scaleY: 5,
} as const;

test("calculateObjectSize", () => {
  expect(calculateObjectSize("width")(exampleObject as any)).toBe(200);
  expect(calculateObjectSize("height")(exampleObject as any)).toBe(25);
});
