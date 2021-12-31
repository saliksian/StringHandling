let string = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
console.log("Original string:", string);
var searchStr = "s";

let indicesArray = [];

if (string.length>0) {
  for (let index = 0; index < string.length; index++) {
    if (string[index]==searchStr) {
      indicesArray.push(index)
    }
    
  }

  if (indicesArray.length>0) {
   console.log(`Character ${searchStr} found ${indicesArray.length} times in a given String`);
  }
  else{
    console.log(`There is no such character for: ${searchStr}`);
  }
  
}
else{
  console.log("String is Empty!!");
}




