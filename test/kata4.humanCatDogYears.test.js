const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  test("returns array of human, cat and dog years when passed human years", () => {
    expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
    expect(humanCatDogYears(6)).toStrictEqual([6, 40, 44]);
    expect(humanCatDogYears(1)).toStrictEqual([1, 15, 15]);
    expect(humanCatDogYears(2)).toStrictEqual([2, 24, 24]);
  });
});
