//remove duplicates items from array
const arr = [10, 5, 20, 10, 6, 5, 0];

const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

//changing the numer's string to number
const quantity = '53';
const quan = +'53';
console.log('quantity type is: ', typeof quantity);
console.log('quan type is: ', typeof quan);

//it wont work for the numbers like '45rf' 'adfa45' ans so on
//
//const id = +'45rt'  // NaN

//removing falsy value like null, undefined from array
const arrN = [12, 'xyz', NaN, undefined];
const filterArray = arrN.filter(Boolean); // [23, 'xyz']

//assigning values to multiple variables
//  let a, b, c;
// a=1;
// b=2;
// c=3;

//shorthand value can be any type like obj,str, etc
let [a, b, c] = [1, 2, 3];
console.log('value of b is ', b);

//swapping 2 values
let x = 'hello',
  y = 'world';

//previously
// const temp = x
// x = y;
//  y= temp

//shorthand
[x, y] = [y, x];

//obj prop to variable
const obj = {
  product: 'mobile',
  color: 'black',
  price: 25000,
};

//previosly
// const product = obj.product;
// const color = obj.color;

// shortcut using destructring
const { product, color } = obj;

//multiple conditional checking
/* 
if(
value === 1 || value === 'one' || value === 2 || value === 'two'
){
  //logic
}

//shortcut
if([1, 'one', 2, 'two'].includes(value)){
  //logic
} */

//math.floor shortcut
const floor = Math.floor(6.8); //6

//shortcut
const floor1 = ~~6.8;

/* 
//default value using or operator
let data = [];
if (userList !== null && userList !== undefined) {
  data = userslist;
}

//shortcut
const data1 = userList || [];

//using && instead for true logic for ternary operator
//basically used in react conditional rendering
{isLoading ? <Loader/> : null};
{isLoading && <Loader/>} */

//removing multilple properties from an obj
const objOne = { x: 1, y: 2, z: 3, a: 5 };

//removing x and a
delete objOne.x;
delete objOne.a;

console.log(objOne);

//shortcut
const obj1 = { b: 1, f: 2, z: 3, a: 5 };
const { f, z, ...newObj } = obj1;
console.log('neewobj: ', newObj);

//for loops
const arr1 = ['apple', 'mango'];

for (let val of arr1) {
  console.log('for of: ', val);
}

//returns index
for (let key in arr1) {
  console.log('for in: ', arr[key]);
}

//value of each element
arr1.forEach((val, index, arr) => {
  console.log('for each: ', val);
});

//convert string to array

const str = 'x,y,z';
//method 1
console.log('using split', str.split(',')); //['x', 'y', 'z'];

const str1 = 'html';

//method 2
console.log('using spread operator ', [...str1]);

//method 3
console.log('using Array.from: ', Array.from(str1));

//method 4
const str2 = 'html';
console.log('using Object.assign ', Object.assign([], str2));
