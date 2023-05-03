
// function add(a, b){
//     return a + b;
// }


// function subtract(a,b){
//     return a - b;
// }


// function divide(a,b){
//     return a / b;
// }


// function multiply(a, b){
//     return a * b;
// }



//export {add, subtract, divide, multiply}

const calculator = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => {
      if (num2 === 0) {
        throw new Error('Division by zero');
      }
      return num1 / num2;
    },
  };

  export { calculator }