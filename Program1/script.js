var dom = document;
var inp = dom.getElementById("input");
var result = dom.getElementById("result");

function length() {
    var input = inp.value
  result.innerHTML = `Length of String: ${input.length}`;

  inp.value= "";
}
