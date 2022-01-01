let str = "My name is salik";
let string = str.toUpperCase().trim();
console.log("Original string:", string);

let array = [];
for (let index = 0; index < string.length; index++) {
  if (string[index] != " ") {
    array.push(string[index]);
  }
}
let freqCount = [];

if (string.length > 0) {
  for (let index = 0; index < array.length; index++) {
    var count = 1;

    for (let ind = index + 1; ind < array.length; ind++) {
      if (array[index] == array[ind]) {
        count++;
        array.splice(ind, 1);
        ind--;
      }
    }
    freqCount.push(count);
  }
  console.log(array);

  console.log(freqCount);

  for (let index = 0; index < array.length; index++) {
    console.log(
      `Character ${array[index]} found ${freqCount[index]} times in given string`
    );
  }
} else {
  console.log("String is Empty!!");
}
