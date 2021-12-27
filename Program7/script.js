var str = "Muhammad salik Computer Science@91";
var charcode
var toogleCase = ""
console.log("Original String:",str);

for (let index = 0; index < str.length; index++) {
    charcode = str.charCodeAt(index)

   if (charcode>=65 && charcode<=90) {
     
       toogleCase = toogleCase.concat(str.charAt(index).toLowerCase())
    }
    else if (charcode>=97 && charcode<=122) {
       toogleCase = toogleCase.concat(str.charAt(index).toUpperCase())  
    }
    else{
       toogleCase = toogleCase.concat(str.charAt(index))  

   }
}

console.log(toogleCase);

