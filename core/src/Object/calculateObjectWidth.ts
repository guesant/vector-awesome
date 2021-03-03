import { IObject } from "../IObject";

/**
 * Compute the real object width by multiplying
 * the `object.width` with `object.scaleX`
 *
 * ```typescript
 * calculateObjectWidth({ width: 5, scaleX: 3 }); // 15
 * ```
 */

export const calculateObjectWidth = (object: IObject) =>
  (object.width ?? 0) * (object.scaleX ?? 1);
