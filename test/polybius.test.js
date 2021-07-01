// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe("polybius", () => {
  it(`should return false`, () => {
    const actual = polybius("thinkful");
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
