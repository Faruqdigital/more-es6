/** practice problem 1 */
/* 1. */
const nums = [1, 3, 5, 7, 9];
let output = nums.map(n => n + 1);
// console.log(output);

/* 2. */
const ages = [33, 50, 79, 78, 90, 101, 30 ];
const age = ages.filter(num => num % 10 === 0 );
// console.log(age);

/* 3. */
const numbers = [33, 50, 79, 78, 90, 101, 30 ];
const number = numbers.find(n => n % 10 === 0 );
// console.log(number);

/** practice problem 2 */

const array1 = [1, 9, 17, 22];

// 0 + 1 + 9 + 17 + 22
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

// console.log(sumWithInitial);
// expected output: 49

/** practice problem 3 */

const people = [
    { name: 'meena', age: 20},
    { name: 'mona', age: 15},
    { name: 'razu', age: 22}
];
const totalAge = people.reduce(
    (previousAge, currentAge) => previousAge + currentAge.age,
    0,
);
// console.log(totalAge);

/** practice problem - 4. */

const student = {
    name: 'habib',
    age: 25,
}
// console.log(student.age);

/** practice problem - 5. */

let data = {
    location:[
        {
            city: 'dhaka',
            country: 'bangladesh',
        }
    ]
};

const info = data.location[0].city;
// console.log(info);
    
/** practice problem - 6. */

const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  const information = user.address.city;
  const findLat = user.address.geo.lat;
  const phoneName = user.company.name;
  console.log(user.email);
  console.log(user.address);
  console.log(information);
  console.log(findLat);
  console.log(phoneName);