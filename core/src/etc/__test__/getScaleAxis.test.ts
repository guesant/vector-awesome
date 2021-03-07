import { getScaleAxis } from "../getScaleAxis";

test("getScaleAxis", () => {
  expect(getScaleAxis("width")).toBe("scaleX");
  expect(getScaleAxis("height")).toBe("scaleY");
  expect(getScaleAxis("" as any)).toBe(null);
});
