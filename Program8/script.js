var string = "MuhammadSalik91@gmail.com";
var alpha = 0;
var digit = 0;
var specialchar = 0;

for (let index = 0; index < string.length; index++) {
   if ((string[index] >= 'a'&& string[index] <= 'z') || (string[index] >= 'A'&& string[index] <= 'Z') ) {
      alpha++;
   }
   else if (string[index]>=0 && string[index]<=9) {
      digit++;
   }
   else{
      specialchar++
   }
   
}

console.log("Original String:",string);
console.log("Alphabets in String:",alpha);
console.log("Digits in String:",digit);
console.log("Special Characters in String:",specialchar);
