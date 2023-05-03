import { capitalize } from "../capitalize"
import {reverseString} from "../reverseString"
import {add, subtract, divide, multiply} from "../calculator"
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
  

test('reverse the string function', () => {
    expect(reverseString("hello")).toBe("olleh");
})


//cal test

test('add a + b  function', () => {
  expect(add(2,2)).toEqual(4);
});

test('subtract a - b  function', () => {
    expect(subtract(2,2)).toEqual(0);
});


test('divide a / b  function', () => {
    expect(divide(2,2)).toEqual(1);
});


test('multiply a * b  function', () => {
    expect(multiply(2,2)).toEqual(4);
});


// Shift the string "hello" by 3
test('function that takes a string and returns it with each character shifted', () => {
    expect(caesarCipher("hello", 3)).toBe("khoor");
});


