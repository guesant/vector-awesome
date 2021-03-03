import { IPointTuple } from "../IPointTuple";

/**
 * [[getX]] returns the X axis from [[IPointTuple]]
 *
 * ```typescript
 * getX([10, 20]) === 10
 * ```
 */

export const getX = (point: IPointTuple) => point[0];
