// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution.js");

describe("caesar", () => {
  it(`should translate I and J to 42`, () => {
    const actual = substitution("july for bioshock");
    const expected = "42541345 124324 21424334433152";
    expect(actual).to.eql(expected);
  });

  it(`should return false`, () => {
    const actual = caesar("thinkful", 100);
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it(`should return false`, () => {
    const actual = caesar("thinkful", -26);
    const expected = false;
    expect(actual).to.eql(expected);
  });
});
