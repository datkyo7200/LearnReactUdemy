const Person = {
  name: "Kha",
  age: 25,
};

const { name, age } = Person;
console.log(name, age);

const numbers = [1, 2, 3, 4];
const [num1, , num2] = numbers;

console.log(num2);
