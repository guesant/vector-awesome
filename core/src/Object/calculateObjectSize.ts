import { getScaleAxis } from "../etc/getScaleAxis";
import { IObject } from "../IObject";

export const calculateObjectSize = (size: "width" | "height") => (
  object: IObject,
) => (object[size] ?? 0) * (object[getScaleAxis(size)!] ?? 1);
