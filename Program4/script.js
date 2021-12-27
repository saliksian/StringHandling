var str1 = "MUHAMMAD SALIK";
var str2 = "muhammad salik";

var string1 = str1.toUpperCase()
var string2 = str2.toUpperCase()

console.log("First string:", str1);
console.log("Second string:", str2);

var result = string1.localeCompare(string2)

if (result === 0) {
    console.log("Two Strings are Equal!!");
}
else{
    console.log("Two Strings are different!!");

}

