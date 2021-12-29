let str = "I love my country"

let string = str.trim();
let reverseString = "";

let strArray = string.split(" ").reverse();
let revStr = strArray.forEach((e) => {

  reverseString = reverseString.concat(e);
  reverseString = reverseString.concat(" ")
});
console.log("Original String: ",string);
console.log("Reverse String Words: ",reverseString);


