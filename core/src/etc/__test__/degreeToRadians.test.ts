import { degreeToRadians } from "../degreeToRadians";

test("degreeToRadians", () => {
  expect(degreeToRadians(0)).toBeCloseTo(0);
  expect(degreeToRadians(90)).toBeCloseTo(Math.PI / 2);
  expect(degreeToRadians(180)).toBeCloseTo(Math.PI);
  expect(degreeToRadians(360)).toBeCloseTo(2 * Math.PI);
});
