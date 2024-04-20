const user = {
  id: 1,
  name: 'spark',
  profile: 'https://www.google.com',
};

//destructuring name and id
const { id, name: nam } = user;
console.log(id, nam); // 1 spark

// destructuring undefined value
const { addres } = user;
console.log(addres); //undefined

//passing default value
const { address = 'kathmandu' } = user;
console.log(address); // kathmandu

//using alias
const { name: userName } = user;
console.log('username: ', userName); // username: spark

//destructuring nested obj
const obj = {
  id: 1,
  name: {
    first: 'john',
    last: 'cena',
  },
  address: 'usa',
};

const {
  name: { first },
} = obj;
console.log('nested obj: ', first);

//setting default value to nested obj
const {
  name: { middle = 'bargim' },
} = obj;
console.log(middle);

//destructuring array
const date = ['2021', '01', '01'];
//normal way
const years = date[0];

//using destructuring
const [year, month, day] = date;
console.log('year,month,day', year, month, day);

//taking only necessary data
const [yr, , dy] = date;
console.log('yr,dy: ', yr, dy);
