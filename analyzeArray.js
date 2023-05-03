function analyzeArray(arr) {
  const length = arr.length;
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const average = sum / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { average, min, max, length };
}



const arr = [1, 8, 3, 4, 2, 6];
const object = analyzeArray(arr);
console.log(object);

//{average: 4, min: 1, max: 8, length: 6}

export { analyzeArray };
