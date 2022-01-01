let str = "muhammad salik";
let string = str.trim();

let indexremove = string.indexOf("a")
console.log("Original String", string);
let newString = "";
// let strArray = [];
for (let index = 0; index < string.length; index++) {
  if (index==indexremove) {
    
  }else{
  newString = newString.concat(string[index]);}
  
}
console.log("New String:", newString);
console.log(indexremove);