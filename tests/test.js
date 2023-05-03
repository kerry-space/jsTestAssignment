import { capitalize } from "../capitalize"
import {reverseString} from "../reverseString"
//import {add, subtract, divide, multiply} from "../calculator"
import {calculator} from "../calculator"
import {caesarCipher} from "../caesarCipher"

// test('capitalize function capitalizes the first letter of a string', () => {
//     expect(capitalize('hello')).toBe('Hello');
// });

describe('capitalize function', () => {
    test('capitalizes the first character of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
    });
  
    test('handles empty string', () => {
      expect(capitalize('')).toBe('');
    });
  
    test('handles string with only one character', () => {
      expect(capitalize('a')).toBe('A');
    });
  
    test('handles before and after whitespaces', () => {
      expect(capitalize('  hello ')).toBe('Hello');
      expect(capitalize(' world  ')).toBe('World');
    });
  });


// test('reverse the string function', () => {
//     expect(reverseString("hello")).toBe("olleh");
// })

describe('reverseString', () => {
    test('should reverse a string', () => {
      expect(reverseString('hello world')).toEqual('dlrow olleh');
    });
  
    test('should handle empty string', () => {
      expect(reverseString('')).toEqual('');
    });
  
    test('should handle single character string', () => {
      expect(reverseString('a')).toEqual('a');
    });
  
    test('should handle strings with spaces', () => {
      expect(reverseString('   hello   world   ')).toEqual('dlrow   olleh');
    });
  
    test('should handle strings with special characters', () => {
      expect(reverseString('hello!@#$%^&*()world')).toEqual(
        'dlrow)(*&^%$#@!olleh'
      );
    });
  
    test('handles before and after whitespaces', () => {
      expect(reverseString('   hello world   ')).toEqual('dlrow olleh');
    });
  });


// test('add a + b  function', () => {
//   expect(add(2,2)).toEqual(4);
// });

// test('subtract a - b  function', () => {
//     expect(subtract(2,2)).toEqual(0);
// });


// test('divide a / b  function', () => {
//     expect(divide(2,2)).toEqual(1);
// });


// test('multiply a * b  function', () => {
//     expect(multiply(2,2)).toEqual(4);
// });

describe('calculator', () => {
  test('should add two numbers correctly', () => {
    expect(calculator.add(2, 3)).toEqual(5);
  });

  test('should subtract two numbers correctly', () => {
    expect(calculator.subtract(5, 2)).toEqual(3);
  });

  test('should multiply two numbers correctly', () => {
    expect(calculator.multiply(4, 6)).toEqual(24);
  });

  test('should divide two numbers correctly', () => {
    expect(calculator.divide(10, 5)).toEqual(2);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrowError();
  });
});


// Shift the string "hello" by 3
// test('function that takes a string and returns it with each character shifted', () => {
//     expect(caesarCipher("hello", 3)).toBe("khoor");
// });


describe('caesarCipher', () => {
    test('should encrypt uppercase letters while preserving case', () => {
      expect(caesarCipher('HELLO', 3)).toBe('KHOOR');
      expect(caesarCipher('WORLD', 5)).toBe('BTWQI');
    });
  
    test('should encrypt lowercase letters while preserving case', () => {
      expect(caesarCipher('world', 5)).toBe('btwqi');
      expect(caesarCipher('hello', 7)).toBe('olssv');
    });
  
    test('should encrypt keeping the same case', () => {
      expect(caesarCipher('World', 5)).toBe('Btwqi');
      expect(caesarCipher('Hello', 7)).toBe('Olssv');
    });
  
    test('should handle wrapping around from Z to A and z to a', () => {
      expect(caesarCipher('ZEBRA', 1)).toBe('AFCSB');
      expect(caesarCipher('zebra', 1)).toBe('afcsb');
    });
  
    test('should handle non-letter characters including punctuation', () => {
      expect(caesarCipher('Hello, world!', 7)).toBe('Olssv, dvysk!');
      expect(caesarCipher('Testing! 1, 2, 3.', 4)).toBe('Xiwxmrk! 1, 2, 3.');
    });
  
    test('should handle empty string input', () => {
      expect(caesarCipher('', 5)).toBe('');
    });
  
    test('should handle zero shift input', () => {
      expect(caesarCipher('Hello, world!', 0)).toBe('Hello, world!');
    });
  });