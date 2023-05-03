function reverseString(str) {
  // let reverseStr = "";
  // for(let i= 0, j =str.length - 1; i < str.length; i++, j--){
  //     reverseStr += str[j];
  // }
  // return reverseStr;

  return str.trim().split('').reverse().join('');
}

export { reverseString };
