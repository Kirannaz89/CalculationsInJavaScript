function call1() { 

  var a = document.getElementById("firstnum").value;
  var b = document.getElementById("secondnum").value;
  var c = document.getElementById("thirdnum").value;
  var d1 = Number(a)
  document.getElementById("ans1").innerHTML = d1;


  var d2 =  Number(b)  
  document.getElementById("ans2").innerHTML = d2;
  

  var d3 =Number(c)

    document.getElementById("ans3").innerHTML = d3;
}


function call2() { 

  var a = document.getElementById("firstnum").value;
  var b = document.getElementById("secondnum").value;
  var c = document.getElementById("thirdnum").value;
  var e1 = Number(a*2)
  document.getElementById("add1").innerHTML = e1;


  var e2 =  Number(b*4)  
  document.getElementById("add2").innerHTML = e2;
  

  var e3 =Number(c*4)

    document.getElementById("add3").innerHTML = e3;
    var e4 = e1 + e2+e3;
     document.getElementById("add4").innerHTML = e4;
}

      function addRow(){
  var a = document.getElementById('firstnum').value;
  var b = document.getElementById('secondnum').value;
  var c = document.getElementById('thirdnum').value;}


