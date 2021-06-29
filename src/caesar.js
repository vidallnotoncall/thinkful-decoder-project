// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25){
      return false;
    }  
    //alphabet for shifting
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    let res = "";
    //if encoding use regular shift value is decoding use opposite
    const shiftValue = (encode === true) ? shift : shift * -1;
    console.log(shift)
      res = input
      .toLowerCase()
      .split('')
      .reduce((acc, letter) =>{
        //current position of letter in alphabet
        const letterPosition = alphabet.indexOf(letter)
        //if its a letter perform shift if not go ahead and push the value
        if (letter.match(/[a-z]/i)){
          const newPosition = (letterPosition + shiftValue) % 26
          console.log(newPosition)
          acc.push(alphabet[newPosition])
        }else{
          acc.push(letter);
        }
        return acc;
      }, [])
    
      return res.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
