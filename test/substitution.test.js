// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution.js");

describe("caesar", () => {
  it(`should return false if alphabet isnt 26 characters`, () => {
    const actual = substitution("naruto", "zyxwvutsrqponmlkjihgfedcb");
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it(`should correctly translate the phrase`, () => {
    const actual = substitution("naruto", "zyxwvutsrqponmlkjihgfedcba");
    const expected = "mzifgl";
    expect(actual).to.eql(expected);
  });

  it(`should return false for duplicates in alphabet`, () => {
    const actual = substitution("naruto", "zyxwvutszqponmlkzihgfedcba");
    const expected = false;
    expect(actual).to.eql(expected);
  });
  it(`should maintain spacing`, () => {
    const actual = substitution(
      "naruto and sasuke",
      "zyxwvutsrqponmlkjihgfedcba"
    );
    const expected = "mzifgl zmw hzhfpv";
    expect(actual).to.eql(expected);
  });
  it(`should ignore capital letters`, () => {
    const actual = substitution(
      "NarUto and SasuKe",
      "zyxwvutsrqponmlkjihgfedcba"
    );
    const expected = "mzifgl zmw hzhfpv";
    expect(actual).to.eql(expected);
  });
});
