import { IBoxPointMode } from "../IBoxPointMode";

const fnCompare = { min: Math.min, max: Math.max };
const fnCompareInitial = { min: Infinity, max: -Infinity };

/**
 * @returns Returns `[Math.min, Infinity]` or `[Math.max, -Infinity]`.
 */

export const extractorCompare = (mode: IBoxPointMode) =>
  [
    (a: number, b: number) => fnCompare[mode](a, b),
    fnCompareInitial[mode],
  ] as const;
