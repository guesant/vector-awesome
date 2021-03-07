import { calculateObjectSize } from "./calculateObjectSize";

/**
 * Compute the real object height by multiplying
 * the `object.height` with `object.scaleY`
 *
 * ```typescript
 * calculateObjectHeight({ height: 5, scaleY: 2 }); // 10
 * ```
 */

export const calculateObjectHeight = calculateObjectSize("height");
