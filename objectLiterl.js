const mystery = "shaikh";
const a = 7;
const fullName = "shaikh juned ";
const obj = {
  fullName,
  a: a,
  b: 25,
  ["fname"]: "mohmmad",
  [mystery]: 65,
  ["lname"]: "Adnan",
};

console.log(obj.fullName);
console.log(obj.a);
console.log(obj.b);
console.log(obj.shaikh);
console.log(obj["lname"]);
console.log(obj["fname"]);



//practice second time

const x = "kulsum";
const num = 55;
const fullName1="seemrun Khan";

const obj2 ={
    x,
    num:num,
    fullName1,
}
console.log("this is x value:: ",obj2.x);
console.log("This is num value:: ",obj2.num);
console.log("This is my love:: ",obj2.fullName1);
