import { IPointTuple } from "../IPointTuple";
import { getBoxPoint } from "./getBoxPoint";

export const getAbsoluteBoxPoints = (
  box: readonly [IPointTuple, IPointTuple, IPointTuple, IPointTuple],
) => [
  getBoxPoint(box, "min", "x"),
  getBoxPoint(box, "min", "y"),
  getBoxPoint(box, "max", "x"),
  getBoxPoint(box, "max", "y"),
];
