var str = "Muhammad Salik";
var strArray = [];
var copyStr = "";
console.log("Original Array:", str);

for (let index = 0; index < str.length; index++) {
  strArray.push(str.charAt(index));
}
var str1 = "";
for (let index = 0; index < strArray.length; index++) {
  str1 = strArray[index];
  copyStr = copyStr.concat(str1);
}

console.log("Copied Array:", copyStr);
