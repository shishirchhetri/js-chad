const planets = ['venus', 'mercury'];
const shadowPlanets = ['rahu', 'ketu'];

//copy data using spread operator
const allPlanets = [...planets, ...shadowPlanets];
console.log(allPlanets); //[ 'venus', 'mercury', 'rahu', 'ketu' ]

const all = ['Earth', ...allPlanets];
console.log(all); //[ 'Earth', 'venus', 'mercury', 'rahu', 'ketu' ]

//assigning values
const [a, b] = [1, 2, 4, 5];
console.log(a, b); //1 2

const [c, ...d] = [1, 2, 4, 5];
console.log(c, d); // 1 [ 2, 4, 5 ]

//spread in objects
const user = {
  id: 1,
  name: 'john cena',
  profile: 'https://www.google.com',
  message: 'hello',
};

//update obj
const updateUser = { ...user, address: 'Kathmandu' };

console.log('updatedUser: ', updateUser);
/*  output://
 updatedUser:  {
  id: 1,
  name: 'john cena',
  profile: 'https://www.google.com',
  message: 'hello',
  address: 'Kathmandu'
} */

// data will be overwrite if passed the same key

const updateUser1 = { ...user, address: 'Kathmandu', name: 'spark' };
console.log(updateUser1);
/* output://
 {
  id: 1,
  name: 'spark',
  profile: 'https://www.google.com',
  message: 'hello',
  address: 'Kathmandu'
}
*/

//spread operator in function argument

function add(a, ...rest) {
  var sum = 0;
  sum += a;

  for (let i = 0; i < rest.length; i++) {
    sum += i;
  }
  return sum;
}

console.log('sum ', add(1, 2, 3, 4, 5, 6));
