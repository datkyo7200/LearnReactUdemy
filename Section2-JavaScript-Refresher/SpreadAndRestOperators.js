const tNumber = [1, 2, 3];
const newNumber = [...tNumber, 4];
console.log(newNumber);

const Person = {
  name: "abc",
  age: 21,
};
const newPerson = { ...Person, name: "bca", gender: true };
console.log(newPerson);

const filter = (...agrs) => {
  return agrs.find((e) => e === 2);
  //   return agrs.filter((el) => el === "a");
};

console.log(filter(2, "a"));
