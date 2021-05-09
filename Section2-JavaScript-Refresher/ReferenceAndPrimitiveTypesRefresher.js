const person = {
  name: "abc",
};
const newPerson = {
  ...person,
};
person.name = "hihi";
console.log(newPerson);
//{ name: 'abc' }
