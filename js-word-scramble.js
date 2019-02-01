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