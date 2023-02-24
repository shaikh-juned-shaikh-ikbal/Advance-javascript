//Array destructuring
/*const Number =[1,2,3,4,5,6];
console.log(Number[1]);*/

// ----------------------------------------------------------two method same

const numArray = ["shaikh", "juned", 22, "Bed first year", ["Male", 250000]];
const [fname, lname, age, addmission, [Gander, salary]] = numArray;
console.log("This is first Name: ", fname);
console.log("This is lastName: ", lname);
console.log("This is age:: ", age);
console.log("This is addmision: ", addmision);
console.log("This is Gander:: ", Gander);
console.log("This is salary:: ", salary);

//--------------------------------------------------------------------------------

//functin destructuring
const user = () => {
    return [1,2,3,4,5,67,8,9,0,];
};

const [a,b,c,d,e,f,g,h]=user();
console.log("This is f vale: ",f);
