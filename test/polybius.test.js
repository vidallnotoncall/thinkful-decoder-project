// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe("polybius", () => {
  it(`should translate I and J to 42`, () => {
    const actual = polybius("july for bioshock");
    const expected = "42541345 124324 2142433432433152";
    expect(actual).to.eql(expected);
  });

  it(`should translate 42 to i or j`, () => {
    const actual = polybius("42541345 124324 2142433432433152", false);
    const expected = "(i/j)uly for b(i/j)oshock";
    expect(actual).to.eql(expected);
  });

  it(`should ignore capital letters`, () => {
    const actual = polybius("JULY FOR BIOSHOCK");
    const expected = "42541345 124324 2142433432433152";
    expect(actual).to.eql(expected);
  });
  it(`should maintain spacing encoding`, () => {
    const actual = polybius("JULY FOR BIOSHOCK");
    const expected = "42541345 124324 2142433432433152";
    expect(actual).to.eql(expected);
  });
  it(`should maintain spacing decoding`, () => {
    const actual = polybius("11 22434341 3143423151", false);
    const expected = "a good co(i/j)ce";
    expect(actual).to.eql(expected);
  });
});
