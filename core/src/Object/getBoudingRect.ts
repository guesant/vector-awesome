import { IObject } from "../IObject";
import { calculateObjectDimensions } from "./calculateObjectDimensions";
import { getAbsoluteBoxPoints } from "../Box/getAbsoluteBoxPoints";
import { rotateSquarePoints } from "../Point/rotateSquarePoints";
import { degreeToRadians } from "../etc";

export const getBoundingRect = (object: IObject) => {
  const { left = 0, top = 0, angle = 0 } = object;
  const { width, height } = calculateObjectDimensions(object);
  const [right, bottom] = [left + width, top + height];

  const [lt, lb, rt, rb] = rotateSquarePoints(
    [left, bottom, right, top],
    [left, top],
    degreeToRadians(-angle),
  );

  const [boxLeft, boxTop, boxRight, boxBottom] = getAbsoluteBoxPoints([
    lt,
    lb,
    rt,
    rb,
  ]);

  return {
    lt,
    lb,
    rt,
    rb,
    boxTop,
    boxLeft,
    boxRight,
    boxBottom,
    boxWidth: Math.abs(boxRight - boxLeft),
    boxHeight: Math.abs(boxBottom - boxTop),
  };
};
