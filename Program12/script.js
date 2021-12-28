let str = "madam";
let string = str.toUpperCase().trim();
let revStr = "";
console.log("Original String:", str);

for (let index = string.length; index >= 0; index--) {
  revStr = revStr.concat(string.charAt(index));
  
}
if (string.length !=0) {
  
  if (!string.localeCompare(revStr)) {
    console.log("String is palindrome");
  }
  else if (string.localeCompare(revStr)) {
    console.log("String is not palindrome");
    
  }
}else{
  console.log("String is Empty");
}

 





