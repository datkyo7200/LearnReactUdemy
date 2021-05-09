class Human {
  gender = "male";

  getGender = () => {
    console.log(this.gender);
  };
}
class Person extends Human {
  name = "Hieu";
  gender = "female";

  getName = () => {
    console.log(this.name);
  };
}

Person.getName;
Person.getGender;
