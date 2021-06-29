// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // grid in the form of an object
    const grid = [
      {letter: 'a', place: '11'},
      {letter: 'b', place: '12'},
      {letter: 'c', place: '13'},
      {letter: 'd', place: '14'},
      {letter: 'e', place: '15'},
      {letter: 'f', place: '21'},
      {letter: 'g', place: '22'},
      {letter: 'h', place: '23'},
      {letter: 'i', place: '24'},
      {letter: 'j', place: '24'},
      {letter: 'k', place: '25'},
      {letter: 'l', place: '31'},
      {letter: 'm', place: '32'},
      {letter: 'n', place: '33'},
      {letter: 'o', place: '34'},
      {letter: 'p', place: '35'},
      {letter: 'q', place: '41'},
      {letter: 'r', place: '42'},
      {letter: 's', place: '43'},
      {letter: 't', place: '44'},
      {letter: 'u', place: '45'},
      {letter: 'v', place: '51'},
      {letter: 'w', place: '52'},
      {letter: 'x', place: '53'},
      {letter: 'y', place: '54'},
      {letter: 'z', place: '55'}
    ]


    let res = '';



  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
