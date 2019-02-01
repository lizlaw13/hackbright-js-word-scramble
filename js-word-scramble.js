let greeting = "hello world";
let chars = greeting.split('');
let updateString = chars.join('');
console.log(updateString);

let newItems = [ 'hi', 'bye', 'sup', 'later', 'sleep', 'yo', 'bye', 'party','liz', 'fatima', 'bye'];


let first = Math.floor(Math.random() * newItems.length);
let second = Math.floor(Math.random() * newItems.length);
let Copy = newItems[first];
let newCopy = newItems[second];
newItems[first] = newCopy;
newItems[second] = Copy;
console.log(newItems)

let candy = new Map();
candy['grape'] = 'purple';
candy['cherry'] = 'red';
candy['orange'] = 'orange';
candy['blueberry'] = 'blue;
candy['mystery'] = 'white';

console.log(candy);


let value;
function candyMap(color, map) {
  Object.keys(candy).forEach(function (key) {
    value = candy[key];
      if (color === value) 
        let found = true{
        console.log(`The ${key} flavor is colored ${value}.`);
      } 
    })
  if (found === false) {
    console.log('Sorry, that color doesn’t have a flavor');
  }
  };

