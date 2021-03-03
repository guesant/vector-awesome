import { IPointTuple } from "../IPointTuple";
import { extractorCompare } from "../etc/extractorCompare";
import { extractorCoordinate } from "../etc/extractorCoordinate";
import { IBoxPointCoordinate } from "../IBoxPointCoordinate";
import { IBoxPointMode } from "../IBoxPointMode";

export const getBoxPoint = (
  box: readonly [IPointTuple, IPointTuple, IPointTuple, IPointTuple],
  mode: IBoxPointMode,
  coordinate: IBoxPointCoordinate,
) =>
  box
    .map(extractorCoordinate(coordinate))
    .reduce(extractorCompare(mode)[0], extractorCompare(mode)[1]);
