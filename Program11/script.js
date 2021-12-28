let string = "Salik";
let revStr = "";

for (let index = string.length; index >= 0; index--) {
  revStr = revStr.concat(string.charAt(index));
  
}



console.log("Original String:", string);
console.log("Reverse String:", revStr);


