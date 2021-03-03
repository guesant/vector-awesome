import { IObject } from "../IObject";

/**
 * Compute the real object height by multiplying
 * the `object.height` with `object.scaleY`
 *
 * ```typescript
 * calculateObjectHeight({ height: 5, scaleY: 2 }); // 10
 * ```
 */

export const calculateObjectHeight = (object: IObject) =>
  (object.height ?? 0) * (object.scaleY ?? 1);
