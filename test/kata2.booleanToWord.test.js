const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("rturns yes when passed true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });
  it("returns no when passed no", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
