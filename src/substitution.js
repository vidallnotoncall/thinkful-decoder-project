// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function isUnique(str) {
    return new Set(str).size === str.length;
  }
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || !isUnique(alphabet))
      return false;

    let res = "";
    let realAlphabet = "abcdefghijklmnopqrstuvwxyz";

    res = input
      .toLowerCase()
      .split("")
      .reduce((acc, char) => {
        if (char === " ") {
          acc.push(" ");
        }
        if (encode === true) {
          let spot = realAlphabet.indexOf(char);
          acc.push(alphabet.charAt(spot));
        } else {
          let spot = alphabet.indexOf(char);
          acc.push(realAlphabet.charAt(spot));
        }

        return acc;
      }, []);

    return res.join("");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
