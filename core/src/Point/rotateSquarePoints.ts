import { rotatePoint } from "./rotatePoint";

export const rotateSquarePoints = (
  [left, bottom, right, top]: readonly [number, number, number, number],
  origin: readonly [number, number],
  angle: number,
) =>
  ([
    [left, top],
    [left, bottom],
    [right, top],
    [right, bottom],
  ] as const).map(([x, y]) => rotatePoint([x, y])(origin)(angle));
