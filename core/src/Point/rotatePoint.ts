import { IPointTuple } from "../IPointTuple";

// https://stackoverflow.com/questions/622140/calculate-bounding-box-coordinates-from-a-rotated-rectangle

export const rotatePoint = ([x, y]: IPointTuple) => ([
  originX,
  originY,
]: IPointTuple) => (theta: number): IPointTuple => [
  originX + (x - originX) * Math.cos(theta) + (y - originY) * Math.sin(theta),
  originY - (x - originX) * Math.sin(theta) + (y - originY) * Math.cos(theta),
];
