//Rest operator and spread operator___
/*const number = [1, 2, 3, 4, 5, 6, 7];
const [a, b, c, d] = number;
console.log(a, b);
const [first, ...restnumber] = number;
console.log("first::", first);
console.log("restNumber::", restnumber);

//rest  operator

const obj1 = {
  age: 22,
  fname: "shaikh",
  lname: "juned",
  height: 5.5,
};
const { age, ...person } = obj1;
console.log(person);*/

//--------------------------------------------------------------------------------------------

//practice in function

const myFunction = (a, b, c, ...add) => {
  console.log("This is add value:: ", add);
  return a + b + c;
};
const result = myFunction(1, 2, 3, 8, 9);
console.log("This is result:: ", result);
