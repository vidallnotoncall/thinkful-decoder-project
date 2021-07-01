// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar.js");

describe("caesar", () => {
  it(`should return false`, () => {
    const actual = caesar("thinkful");
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
  it(`should return false`, () => {
    const actual = caesar("thinkful", 0);
    const expected = false;
    expect(actual).to.eql(expected);
  });
  it(`should ignore capital letters`, () => {
    const actual = caesar("A Message", 3);
    const expected = caesar("a message", 3);
    expect(actual).to.eql(expected);
  });
  it(`should wrap at the end of the alphabet`, () => {
    const actual = caesar("zebra xylophone", 3);
    const expected = "cheud aborskrqh";
    expect(actual).to.eql(expected);
  });
  it(`should maintain spaces and non-alpabet symbols`, () => {
    const actual = caesar("zebra xylophone!!!", 3);
    const expected = "cheud aborskrqh!!!";
    expect(actual).to.eql(expected);
  });
});
