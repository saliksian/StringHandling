let string = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
console.log("Original string:", string);

let index = string.lastIndexOf("s");
if (index===-1) {
  console.log(`There is no such character in given string`);
}
else{
  console.log(`Last Occurrence Character found at ${index} index`);
}



