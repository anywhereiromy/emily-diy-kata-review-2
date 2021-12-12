const { joinNames } = require("../src");

describe("joinNames", () => {
  const bart = { name: "Bart" };
  const lisa = { name: "Lisa" };
  const maggie = { name: "Maggie" };
  const alison = { name: "Alison" };
  const emily = { name: "Emily" };
  const jessie = { name: "Jessie" };
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([bart, lisa, maggie])).toEqual("Bart, Lisa & Maggie");
    expect(joinNames([alison, emily, jessie])).toEqual(
      "Alison, Emily & Jessie"
    );
    expect(joinNames([alison, jessie])).toEqual("Alison & Jessie");
  });
});
