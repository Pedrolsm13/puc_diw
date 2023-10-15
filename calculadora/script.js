function calcular(){
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  var op = document.getElementById("op").value;
  var res = 0;

  if(op == "+")
    res = n1 + n2;
  else if(op == "-")
    res = n1 - n2;
  else if(op == "*")
    res = n1 * n2;
  else if(op == "/")
    res = n1 / n2;

  //document.getElementById("res").value = res;
  document.getElementById("res1").innerHTML = res;
}