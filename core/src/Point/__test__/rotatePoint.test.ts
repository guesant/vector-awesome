import { degreeToRadians } from "../../etc";
import { rotatePoint } from "../rotatePoint";

const PRECISION_RATE = 3;

test("rotatePoint", () => {
  expect(rotatePoint([0, 10])([0, 0])(0)).toEqual([0, 10]);

  const [x1, y1] = rotatePoint([0, 10])([0, 0])(degreeToRadians(-90));
  expect(x1).toBeCloseTo(-10, PRECISION_RATE);
  expect(y1).toBeCloseTo(0, PRECISION_RATE);

  const [x2, y2] = rotatePoint([3, 1])([0, 0])(degreeToRadians(90));
  expect(x2).toBeCloseTo(1, PRECISION_RATE);
  expect(y2).toBeCloseTo(-3, PRECISION_RATE);
});
