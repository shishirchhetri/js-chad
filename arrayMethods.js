//push - adding data at the end of arry
const numbers = [1, 2, 4, 5];
const num = numbers.push(6);
//[1,2,4,5,6]

console.log(num);

//pop - removes value from end of array
const popedValue = numbers.pop();
console.log('removing value from last', numbers);

//shift() - removes value form starting of array
const names = ['john', 'doe', 'jane'];
const first = names.shift();
console.log('deleted value', first);
console.log(names);

//unshift() - adds data from starting of an array
names.unshift('ram', 'hari');
console.log(names);

//find() - search the data in an array
const number = [1, 2, 3, 4, 5, 6];
const foundValue = number.find((num) => num > 3);
console.log(foundValue);

//some
const even = number.some((num) => num % 2 === 0);
console.log(even);

//every
const isEven = number.every((num) => num % 2 === 0);
console.log(isEven);

//sort
const fruits = ['apple', 'mango', 'banana'];
fruits.sort();
console.log(fruits);

const unsortedNum = [100, 900, 200, 50, 70];
unsortedNum.sort((a, b) => a - b);
console.log(unsortedNum);

//includes()
const data = [1, 2, 3, 4, 5];
// console.log(data.includes(9));

const str = 'This is me';
console.log(str.includes('ie'));

//slice
const nums = [1, 2, 3, 4, 5];
const slicedNums = nums.slice(2, 5);
console.log(slicedNums);

//map
const nums1 = [1, 2, 3];
const doubleNums1 = nums1.map((num) => num * 2);
console.log(doubleNums1);

const navbar = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'About' },
  { id: 3, name: 'Contact' },
];
//
// navbar.map((nav) => {
//   return (
//     <li key={nav.id} className='asdfas asd'>
//       {nav.name}
//     </li>
//   );
// });

//filter
const num2 = [3, 5, 6, 7, 9, 10];
const evenNum = num2.filter((num) => num % 2 === 0);
console.log(evenNum);

//reduce
const num3 = [1, 2, 4, 5, 6];
const totalSum = num3.reduce((total, num) => total + num, 6);
console.log(totalSum);

//forEach
const num4 = [2, 3, 4, 5];
num4.forEach((num) => {
  console.log(num + 'hi');
});

//join
const fruits1 = ['apple', 'banana', 'mango'];
const fruitsString = fruits1.join(' ');
console.log(fruitsString);

//toString()
const fruits2 = [2, 3, 4, 5];
const fruitsStr = fruits2.toString();
console.log(fruitsStr);

//concat()
const n1 = [1, 2, 3];
const n2 = [4, 5, 6];
const n3 = n1 + ',' + n2;
const n4 = n1.concat(n2);
console.log('n4 using concat', n4);
console.log(n3);
