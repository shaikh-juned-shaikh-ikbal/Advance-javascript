const obj1 = {
  age: 22,
  fname: "shaikh",
  lname: "juned",
  height: 5.5,
  temp1: 345,
  temp2: 100,
};

/*const obj ={...obj1};
obj.color="Fair";
console.log("new property:: ",obj.color);*/

const obj2 = {
  ...obj1,

  lname: "adnann",
};

const { lname } = obj2;
console.log(lname);

//-----------------------------------------------------------------------------------------
//practice in Array

const Name = ["kulsum", "shifa", "seemrun"];
const getName = (name1,name2,name3) => {

};
