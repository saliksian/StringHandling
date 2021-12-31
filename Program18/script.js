let str = "My name is salik";
let string = str.trim();
console.log("Original string:", string);

let array = [];
for (let index = 0; index < string.length; index++) {
  if (string[index] != " ") {
    array.push(string[index]);
  }
}

let highestFreq = [];
let highFreqCount = [];

if (string.length > 0) {
  for (let index = 0; index < array.length; index++) {
    var count = 1;

    for (let ind = index + 1; ind < array.length; ind++) {
      if (array[index] == array[ind]) {
        count++;
        highestFreq.push(array[index]);
        highFreqCount.push(count);
        array.splice(ind, 1);
        ind--;
      }
    }
  }
} else {
  console.log("String is Empty!!");
}

// console.log(highestFreq);
// console.log(highFreqCount);


if (string.length>0) {
  let check = false;
  for (let index = 0; index < highFreqCount.length; index++) {
    for (let ind = index + 1; ind < highFreqCount.length; ind++) {
      check = false;
      if (highFreqCount[index] === highFreqCount[ind]) {
        check = true;
      }
      break;
    }
  }


  if (check == false) {
    let i = highFreqCount.indexOf(Math.max(...highFreqCount)); // ... is spread Operator
    console.log(`Highest Frequency Character is: ${highestFreq[i]}`);
  } else if (check == true) {
    console.log(
      `No Highest frequency character But ${highestFreq} Have same frequencies`
    );
  }


}


