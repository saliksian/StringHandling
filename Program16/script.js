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
    indicesArray.forEach((e)=>{
      console.log(`Character ${searchStr} found at ${e} index in given string`);
    })
  }
  else{
    console.log("No Match Found for", searchStr);
  }
  
}
else{
  console.log("String is Empty!!");
}




