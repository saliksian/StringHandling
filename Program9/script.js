var string = "Muhammadsalik91@gmail.com";
var vowel = 0;
var consonant = 0;


for (let index = 0; index < string.length; index++) {
   if ((string[index] >= 'a'&& string[index] <= 'z') || (string[index] >= 'A'&& string[index] <= 'Z') ) {
      if (string[index] == 'a' ||string[index] == 'A' ||string[index] == 'e' ||string[index] == 'E' ||string[index] == 'i' ||string[index] == 'I' ||string[index] == 'o' ||string[index] == 'O' ||string[index] == 'u' ||string[index] == 'U') {
         vowel++
      }
      else{
         consonant++
      }
   }
  
   
}

console.log("Original String:",string);
console.log("vowels in String:",vowel);
console.log("consonants in String:",consonant);

