import { getBoundingRect } from "../getBoudingRect";

test("getBoundingRect", () => {
  expect(
    getBoundingRect({
      top: 5,
      left: 5,
      angle: 0,
      width: 10,
      scaleX: 1,
      scaleY: 1,
      height: 10,
    }),
  ).toEqual({
    lb: [5, 15],
    lt: [5, 5],
    rb: [15, 15],
    rt: [15, 5],
    boxTop: 5,
    boxLeft: 5,
    boxRight: 15,
    boxWidth: 10,
    boxHeight: 10,
    boxBottom: 15,
  });

  const boudingRect2 = getBoundingRect({
    top: 0,
    left: 0,
    angle: -90,
    width: 10,
    scaleX: 1,
    scaleY: 1,
    height: 5,
  });

  expect(boudingRect2.boxLeft).toBeCloseTo(0);
  expect(boudingRect2.boxTop).toBeCloseTo(-10);
  expect(boudingRect2.boxRight).toBeCloseTo(5);
  expect(boudingRect2.boxWidth).toBeCloseTo(5);
  expect(boudingRect2.boxHeight).toBeCloseTo(10);
  expect(boudingRect2.boxBottom).toBeCloseTo(0);
});
