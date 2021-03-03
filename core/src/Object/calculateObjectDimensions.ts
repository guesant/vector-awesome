import { calculateObjectHeight } from "./calculateObjectHeight";
import { calculateObjectWidth } from "./calculateObjectWidth";
import { IObject } from "../IObject";

/**
 * ```typescript
 * calculateObjectDimensions({ width: 5, height: 10, scaleX: 2, scaleX: 2 });
 * // { width: 10, height: 20 }
 * ```
 */

export const calculateObjectDimensions = (object: IObject) => ({
  width: calculateObjectWidth(object),
  height: calculateObjectHeight(object),
});
