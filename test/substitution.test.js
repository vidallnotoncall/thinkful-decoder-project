// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution.js");

describe("caesar", () => {
  it(`should return false`, () => {
    const actual = substitution("thinkful");
    const expected = false;
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
