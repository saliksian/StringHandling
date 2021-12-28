var str = "My name is salik";
let word = 0;
let string = str.trim();

let res = string.split(" ");

let result = res.forEach((e) => {
  if (e.length > 0) {
    word++;
  }
});

console.log("Original String:", string);
console.log("words in String:", word);


