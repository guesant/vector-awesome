import { extractorCoordinate } from "../extractorCoordinate";

test("extractorCoordinate", () => {
  const extractXAxis = extractorCoordinate("x");
  expect(extractXAxis([10, 20])).toBe(10);

  const extractYAxis = extractorCoordinate("y");
  expect(extractYAxis([10, 20])).toBe(20);
});
