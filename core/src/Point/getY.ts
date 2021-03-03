import { IPointTuple } from "../IPointTuple";

/**
 * [[getY]] returns the Y axis from [[IPointTuple]]
 *
 * ```typescript
 * getY([10, 20]) === 20
 * ```
 */

export const getY = (point: IPointTuple) => point[1];
