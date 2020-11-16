 window.alert(Math.random()); //random generated number

 window.alert(Math.random() * 1000); //random generated number from 0 to 1000


 window.alert(Math.cbrt(9)); // cubic root of a number




 function addBy() {
     num1 = document.getElementById("firstNumber").value;
     num2 = document.getElementById("secondNumber").value;
     document.getElementById("result").innerHTML = +num1 + +num2;
 }



 function subtractBy() {
     num1 = document.getElementById("firstNumber").value;
     num2 = document.getElementById("secondNumber").value;
     document.getElementById("result").innerHTML = num1 - num2;
 }



 function multiplyBy() {
     num1 = document.getElementById("firstNumber").value;
     num2 = document.getElementById("secondNumber").value;
     document.getElementById("result").innerHTML = num1 * num2;
 }


 function divideBy() {
     num1 = document.getElementById("firstNumber").value;
     num2 = document.getElementById("secondNumber").value;
     document.getElementById("result").innerHTML = num1 / num2;
 }


 function modulus() {
     num1 = document.getElementById("firstNumber").value;
     num2 = document.getElementById("secondNumber").value;
     document.getElementById("result").innerHTML = num1 % num2;
 }


 function negation() {
     var x = 10;
     document.getElementById("result").write = -x;

 }

 negation();


 function increment() {
     var increase = 7;
     increase++;
     document.getElementById("increment").innerHTML = increase;
 }

 increment();

 function decrement() {
     var decrease = 7;
     decrease--;
     document.getElementById("decrement").innerHTML = decrease;
 }

 decrement();