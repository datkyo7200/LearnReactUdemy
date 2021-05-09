const numbers = [1, 2, 3, 4, 5, 6];

const doubleNumberArray = numbers.map((num) => {
  return num * 2;
});

console.log(numbers);
console.log(doubleNumberArray);
//map() , filter() , reduce() , concat() , slice() , splice() , findIndex() ,find()

const totalNumberArray = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(totalNumberArray);

const oddNumberArray = numbers.filter((number) => {
  return number % 2 !== 0;
});
console.log(oddNumberArray);

const foundNumberArray = numbers.find((number) => {
  return number > 3;
});
console.log(foundNumberArray);

const isLargeNumberArray = numbers.findIndex((number) => {
  return number > 3;
});
console.log(isLargeNumberArray);

const numbers2 = [7, 8, 9];

const mergeArrays = numbers.concat(numbers2);
console.log("mergeArrays", mergeArrays);

const insertsVallueToArray = numbers.splice(0, 0, 3);
console.log("insertsVallueToArray", numbers);

const replacingVallueArray = numbers.splice(0, 1, 20);
console.log("replacingVall  ueArray", numbers);

//cut based on the index
const cutArray = numbers.slice(2);
console.log(cutArray);
console.log(numbers);
const cutArrayIndexToIndex = numbers.slice(2, 5);
console.log("cutArrayIndexToIndex", cutArrayIndexToIndex);
