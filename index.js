

 function animals1()  
 {  
  var chickens = document.getElementById("chickens").value;
  var cows = document.getElementById("cows").value;
  var pigs = document.getElementById("pigs").value;
 
   var d1 = Number(chickens)

document.getElementById("ans1").innerHTML = d1;
 var d2 = Number(cows)
 document.getElementById("ans2").innerHTML = d2;
  var d3 = Number(pigs)
 document.getElementById("ans3").innerHTML = d3;
}


function animals2() { 

  var chickens = document.getElementById("chickens").value;
  var cows = document.getElementById("cows").value;
  var pigs = document.getElementById("pigs").value;
  var leg1 = Number(chickens*2)
  document.getElementById("add1").innerHTML = leg1;


  var leg2 =  Number(cows*4)  
  document.getElementById("add2").innerHTML = leg2;
  

  var leg3 =Number(pigs*4)

    document.getElementById("add3").innerHTML = leg3;
    var totallegs = leg1 + leg2+ leg3;
     document.getElementById("add4").innerHTML = totallegs;
}