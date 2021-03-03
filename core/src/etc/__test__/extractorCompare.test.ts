import { extractorCompare } from "../extractorCompare";

test("extractorCompare", () => {
  const [min, initialMin] = extractorCompare("min");
  expect(min(100, initialMin)).toBe(100);

  const [max, initialMax] = extractorCompare("max");
  expect(max(100, initialMax)).toBe(100);

  expect(min(initialMin, initialMax)).toBe(initialMax);
  expect(max(initialMin, initialMax)).toBe(initialMin);
});
