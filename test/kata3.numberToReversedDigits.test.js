const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toStrictEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(4567)).toStrictEqual([7, 6, 5, 4]);
    expect(numberToReversedDigits(13579)).toStrictEqual([9, 7, 5, 3, 1]);
  });
});
