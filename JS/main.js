window.alert(Math.random()); //random generated number

 window.alert(Math.random() * 1000); //random generated number from 0 to 1000


 window.alert(Math.cbrt(9)); // cubic root of a number




 function addBy() {
     num1 = document.getElementById("firstNumber").value;
     num2 = document.getElementById("secondNumber").value;
     document.getElementById("result").innerHTML = +num1 + +num2; //adding two digits together to get the sum
 }



 function subtractBy() {
     num1 = document.getElementById("firstNumber").value;
     num2 = document.getElementById("secondNumber").value;
     document.getElementById("result").innerHTML = num1 - num2; //subtracting two numbers together to get the difference
 }



 function multiplyBy() {
     num1 = document.getElementById("firstNumber").value;
     num2 = document.getElementById("secondNumber").value;
     document.getElementById("result").innerHTML = num1 * num2; //multiplying two numbers together to get the value
 }


 function divideBy() {
     num1 = document.getElementById("firstNumber").value;
     num2 = document.getElementById("secondNumber").value;
     document.getElementById("result").innerHTML = num1 / num2; //dividing two numbers to get the value 
 }


 function modulus() {
     num1 = document.getElementById("firstNumber").value;
     num2 = document.getElementById("secondNumber").value;
     document.getElementById("result").innerHTML = num1 % num2; //using the modulus operator to get the remainder
 }


 function negation() {
     var x = 10;
     document.getElementById("result").write = -x; //using the (-) symbol to get the opposite value

 }

 negation();


 function increment() {
     var increase = 7;
     increase++;
     document.getElementById("increment").innerHTML = increase; //using the (++) operator to get the value +1 of whatever number I put in
 }

 increment();

 function decrement() {
     var decrease = 7;
     decrease--;
     document.getElementById("decrement").innerHTML = decrease; //using the (--) operator to get the value -1 of whatever number I put in
 }

 decrement();
