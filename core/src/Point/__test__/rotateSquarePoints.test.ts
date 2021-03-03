import { rotateSquarePoints } from "..";
import { degreeToRadians } from "../../etc";

const PRECISION_RATE = 3;

test("rotateSquarePoints", () => {
  const [[ltx, lty]] = rotateSquarePoints(
    [0, 0, 20, 10],
    [0, 0],
    degreeToRadians(-90),
  );

  expect(ltx).toBeCloseTo(-10, PRECISION_RATE);
  expect(lty).toBeCloseTo(0, PRECISION_RATE);
});
