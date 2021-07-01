// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const splitNumbers = (array) => {
    let tempArray = [];
    const newArray = [...array].reduce((acc, char) => {
      if (char === " ") {
        acc.push(char);
      } else {
        tempArray.push(char);
        if (tempArray.length === 2) {
          acc.push(tempArray.join(""));
          tempArray = [];
        }
      }
      return acc;
    }, []);
    return newArray;
  };

  const decodeCheck = (string) => {
    //check for even without spaces
    if (string.split(" ").join("").length % 2 > 0) {
      return false;
    } else {
      return true;
    }
  };
  function polybius(input, encode = true) {
    // grid in the form of an array of objects
    const grid = [
      { letter: "a", place: "11" },
      { letter: "b", place: "21" },
      { letter: "c", place: "31" },
      { letter: "d", place: "41" },
      { letter: "e", place: "51" },
      { letter: "f", place: "12" },
      { letter: "g", place: "22" },
      { letter: "h", place: "32" },
      { letter: "i", place: "42" },
      { letter: "j", place: "42" },
      { letter: "k", place: "52" },
      { letter: "l", place: "13" },
      { letter: "m", place: "23" },
      { letter: "n", place: "33" },
      { letter: "o", place: "43" },
      { letter: "p", place: "53" },
      { letter: "q", place: "14" },
      { letter: "r", place: "24" },
      { letter: "s", place: "34" },
      { letter: "t", place: "44" },
      { letter: "u", place: "54" },
      { letter: "v", place: "15" },
      { letter: "w", place: "25" },
      { letter: "x", place: "35" },
      { letter: "y", place: "45" },
      { letter: "z", place: "55" },
    ];

    let res = "";
    console.log(input);
    if (encode === false) {
      //logic for decoding
      if (!decodeCheck(input)) return false;
      //divide the encoded string by every two
      let inputArray = splitNumbers(input);
      console.log(inputArray);
      res = inputArray.reduce((acc, char) => {
        //find matching letter object
        let charPlace = grid.findIndex((object) => object.place === char);

        let newChar = "";
        //add i and j together
        if (char === "42") {
          newChar = "(i/j)";
          //add spaces properly
        } else if (char === " ") {
          newChar = " ";
        } else {
          newChar = grid[charPlace].letter;
        }

        acc.push(newChar);
        return acc;
      }, []);
      res = res.join("");
    } else {
      //logic for encoding
      let inputArray = input.toLowerCase().split("");
      res = inputArray.reduce((acc, char) => {
        let charPlace = grid.findIndex((e) => e.letter === char);
        let newChar = "";

        if (char === " ") {
          newChar = " ";
        } else {
          newChar = grid[charPlace].place;
        }
        acc.push(newChar);
        return acc;
      }, []);
      res = res.join("");
    }

    return res;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
