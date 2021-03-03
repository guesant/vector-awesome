import { getX } from "../Point/getX";
import { getY } from "../Point/getY";
import { IBoxPointCoordinate } from "../IBoxPointCoordinate";

/**
 * @returns Returns [[getX]] or [[getY]].
 */

export const extractorCoordinate = (
  coordinate: IBoxPointCoordinate,
): typeof getX | typeof getY => (coordinate === "x" ? getX : getY);
