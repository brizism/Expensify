// Object destructuring

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { title, author } = book;
// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName)


// Array destructuring

// const address = ['1299 S Juniper Street', 'New York City', 'New York', '10458'];

// const [, , state = 'Pennsylvania'] = address;

// console.log(`You are in ${state}`)

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];

const [hotCoffee, , mediumSize] = item;
console.log(`A medium ${hotCoffee} costs ${mediumSize}`)
