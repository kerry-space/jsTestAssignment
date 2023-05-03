function caesarCipher(str, shift) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      let shiftedCode = shiftChar(code, shift);
      let encryptedChar = String.fromCharCode(shiftedCode);
      result += encryptedChar;
    }

    return result;
  }

  function shiftChar(code, shift) {
    if (code >= 65 && code <= 90) {
      // uppercase letters
      return shiftUpperCaseChar(code, shift);
    } else if (code >= 97 && code <= 122) {
      // lowercase letters
      return shiftLowerCaseChar(code, shift);
    } else {
      // non-letter characters
      return code;
    }
  }

  function shiftUpperCaseChar(code, shift) {
    return ((code - 65 + shift) % 26) + 65;
  }

  function shiftLowerCaseChar(code, shift) {
    return ((code - 97 + shift) % 26) + 97;
  }


 export {caesarCipher}