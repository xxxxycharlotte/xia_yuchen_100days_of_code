
function p01Func() {

 document.getElementById("problem").innerHTML="<p>draw a flowchart for a computer program to receive two numbers and output their sum. </p>";

 document.getElementById("flowchart").setAttribute("src","images/img01.png");
 document.getElementById("flowchart").style.display="none";
 document.getElementById("js").setAttribute("src","images/js1.png");
 document.getElementById("js").style.display="none";

 document.getElementById("another").setAttribute("src","");
 document.getElementById("another").style.display="none";
 
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;

}


function checkUncheck1(){
  if (document.getElementById("check1").checked==true) {
 document.getElementById("flowchart").style.display="inline";


	 
  }
  else {
   	 
	  document.getElementById("flowchart").style.display="none";

	  
  }
}



function checkUncheck2(){
  if (document.getElementById("check2").checked==true) {
     
     document.getElementById("js").style.display="inline";

	 
  }
  else {	 
	  document.getElementById("js").style.display="none";

	  
  }
}

function checkUncheck3(){
   if (document.getElementById("check3").checked==true) {
     	 
      document.getElementById("another").style.display="inline";
 
     
   }
   else {
       
      document.getElementById("another").style.display="none";
 
      
   }
 }
 


function p02Func() {
   document.getElementById("problem").innerHTML="<p>draw a flowchart for a computer program to receive three numbers and store them in memory spaces called a, b, and c as three sides of a triangle and, by using Heron’s formula, calculate and output the area of the triangle.</p>";

   document.getElementById("flowchart").setAttribute("src","images/img02.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js2.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p03Func() {
   document.getElementById("problem").innerHTML="<p>draw a flowchart for a computer program to receive three numerical coefficients of a quadratic equation (store them in memory spaces called a, b, and c) and calculate and output its roots.</p>";

   document.getElementById("flowchart").setAttribute("src","images/img3.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js3.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p04Func() {
   document.getElementById("problem").innerHTML="<p>draw a flowchart to receive three numerical coefficients of a quadratic equation and determines if it has two distinct real roots, one root, or no roots in real numbers.</p>";

   document.getElementById("flowchart").setAttribute("src","images/img04.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js4.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p05Func() {
   document.getElementById("problem").innerHTML="<p>draw a flowchart to receive a number and map it to a letter grade based on York standard.</p>";

   document.getElementById("flowchart").setAttribute("src","images/img5.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js5.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p06Func() {
   document.getElementById("problem").innerHTML="<p>Draw a flowchart that outputs whether the input is positive or negative until a zero is received. When a zero is received, the button is disabled (so the function cannot be called anymore).</p>";

   document.getElementById("flowchart").setAttribute("src","images/img6.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js6.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p07Func() {
   document.getElementById("problem").innerHTML="<p>draw a flowchart to continue receiving numbers and output if they are positive or negative until a zero is entered. When a zero is entered, the program should output how many positive and how many negative numbers have been entered, then it stops.</p>";

   document.getElementById("flowchart").setAttribute("src","images/img07.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js7.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p08Func() {
   document.getElementById("problem").innerHTML="<p>draw a flowchart to continue receiving numbers and output if they are divisible by 6 or not until a zero is entered. When a zero is entered, the program should output how many of the entered numbers were divisible by 6, then it stops. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img08.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js08.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p09Func() {
   document.getElementById("problem").innerHTML="<p>Devise a flowchart to receive a positive number and output each digit separately.  </p>";

   document.getElementById("flowchart").setAttribute("src","images/img9.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js09.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p10Func() {
   document.getElementById("problem").innerHTML="<p>Devise a flowchart to receive a positive number and output how many of its digits are equal to 7. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img10.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js10.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p11Func() {
   document.getElementById("problem").innerHTML="<p>Devise a flowchart to receive a positive number and output sum of its digits. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img11.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js11.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p12Func() {
   document.getElementById("problem").innerHTML="<p> Devise a flowchart to receive a positive number and output yes if it's equal to its reverse; otherwise no, output .</p>";

   document.getElementById("flowchart").setAttribute("src","images/img12.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js12.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p13Func() {
   document.getElementById("problem").innerHTML="<p>Devise an algorithm to receive a positive number, as n, and output n! (n Factorial). </p>";

   document.getElementById("flowchart").setAttribute("src","images/img13.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js13.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p14Func() {
   document.getElementById("problem").innerHTML="<p>Devise an algorithm to input an integer greater than 1, as n, and output the first n values of the Fibonacci sequence.  </p>";

   document.getElementById("flowchart").setAttribute("src","images/img14.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js14.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p15Func() {
   document.getElementById("problem").innerHTML="<p>Devise an algorithm to input a positive integer, n, – and by using XX characters – output the figure below that has n rows and each row k has k pairs of XX. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img15.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js15.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p16Func() {
   document.getElementById("problem").innerHTML="<p>devise a program to receive a number and determine if it is a prime or not </p>";

   document.getElementById("flowchart").setAttribute("src","images/img16.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js16.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p17Func() {
   document.getElementById("problem").innerHTML="<p>Devise an algorithm to input a 8 positive numbers, if the sum of first inputs is equal to the last four numbers then putput yes, otherwise output no.</p>";

   document.getElementById("flowchart").setAttribute("src","images/img17.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js17.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p18Func() {
   document.getElementById("problem").innerHTML="<p>draw a flowchart to receive numbers and count positive and negative ones, until a zero is received. also, at any time the number of positives gets more than twice the number of negatives, the program should stop.</p>";

   document.getElementById("flowchart").setAttribute("src","images/img18.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js18.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}
function p19Func() {
   document.getElementById("problem").innerHTML="<p>Devise an algorithm to check the count of postive numbers and the count of negative numbers. If they are equal then output yes, otherwise output no.</p>";

   document.getElementById("flowchart").setAttribute("src","images/img19.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js19.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}
function p20Func() {
   document.getElementById("problem").innerHTML="<p>devise a program to receive a positive number, and print all prime numbers less than or equal to that number </p>";

   document.getElementById("flowchart").setAttribute("src","images/img20.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js20.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p21Func() {
   document.getElementById("problem").innerHTML="<p>Devise an algorithm to receive a positive number, n, and output all prime numbers that are smaller than n and have a digit 7. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img21.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js21.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}
function p22Func() {
   document.getElementById("problem").innerHTML="<p>devise a program to receive a number greater than 1 and determine if it is a power of 2 or not </p>";

   document.getElementById("flowchart").setAttribute("src","images/img_22.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js22.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p23Func() {
   document.getElementById("problem").innerHTML="<p>devise a program to output sum of values stored in an array of 100 elements </p>";

   document.getElementById("flowchart").setAttribute("src","images/img_23.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js23.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}
function p24Func() {
   document.getElementById("problem").innerHTML="<p>devise a program to receive two positive whole numbers and output their GCD </p>";

   document.getElementById("flowchart").setAttribute("src","images/img24.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js24.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p25Func() {
   document.getElementById("problem").innerHTML="<p>devise a program to receive a positive whole number and output its binary representation </p>";

   document.getElementById("flowchart").setAttribute("src","images/img_25.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js25.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p26Func() {
   document.getElementById("problem").innerHTML="<p>devise a program to receive 3 numbers and output them in non-ascending order. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img_26.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js26.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p27Func() {
   document.getElementById("problem").innerHTML="<p>draw a flowchart to compute sum of numbers between 10 and 30, inclusively. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img_27.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js27.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p28Func() {
   document.getElementById("problem").innerHTML="<p>Draw a flowchart to take a number as input and check whether the number is divisible by both 6 and 8 or not.  </p>";

   document.getElementById("flowchart").setAttribute("src","images/img28.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js28.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p29Func() {
   document.getElementById("problem").innerHTML="<p>draw a flowchart for a computer program to receive three numbers and store them in memory spaces called a, b, and c as three sides of a triangle and, by using Heron’s formula, calculate and output the area of the triangle. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img29.jpeg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js29.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p30Func() {
   document.getElementById("problem").innerHTML="<p>Draw a flowchart for a program to receive a number from 0-6 and map it to a day in the week </p>";

   document.getElementById("flowchart").setAttribute("src","images/img30.jpg");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js30.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p31Func() {
   document.getElementById("problem").innerHTML="<p>Draw a flowchart that output sum of even values stored in an array of 100 elements </p>";

   document.getElementById("flowchart").setAttribute("src","images/img31.PNG");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js31.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p32Func() {
   document.getElementById("problem").innerHTML="<p>Draw a flowchart for a program to receive Sum of all prime numbers less than 100 </p>";

   document.getElementById("flowchart").setAttribute("src","images/img32.PNG");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js32.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p33Func() {
   document.getElementById("problem").innerHTML="<p>Draw a flowchart for a program to receive some numbers until user enters 0, then thw max# of consecutive should be outputted </p>";

   document.getElementById("flowchart").setAttribute("src","images/img33.PNG");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js33.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p34Func() {
   document.getElementById("problem").innerHTML="<p>Draw a flowchart for a program to Output all numbers between 1 and 1000 that all palindrome </p>";

   document.getElementById("flowchart").setAttribute("src","images/img34.PNG");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js34.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p35Func() {
   document.getElementById("problem").innerHTML="<p>draw upside down triangle </p>";

   document.getElementById("flowchart").setAttribute("src","images/img35.PNG");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js35.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p36Func() {
   document.getElementById("problem").innerHTML="<p>Draw a flowchart for a program to Output factorials of 1 to 10 </p>";

   document.getElementById("flowchart").setAttribute("src","images/img36.PNG");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js36.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p37Func() {
   document.getElementById("problem").innerHTML="<p>Draw a flowchart for a program to receive a decimal number transfer to binary number </p>";

   document.getElementById("flowchart").setAttribute("src","images/img37.PNG");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js37.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p38Func() {
   document.getElementById("problem").innerHTML="<p>Draw a flowchart for a program that prints the numbers from 1 to 30. But for multiples of three print Fizz and for the multiples of five print Buzz instead of the number. Additionally, for numbers which are multiples of both three and five print FizzBuzz </p>";

   document.getElementById("flowchart").setAttribute("src","images/img38.PNG");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js38.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p39Func() {
   document.getElementById("problem").innerHTML="<p>Draw a flowchart that input an array and  ooutput array value </p>";

   document.getElementById("flowchart").setAttribute("src","images/img39.PNG");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js39.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p40Func() {
   document.getElementById("problem").innerHTML="<p>Draw a flowchart for a program to say Dice rolls are “value1” and “value2”, where value1 and value2 are the results of your random numbers. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img40.PNG");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js40.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p41Func() {
   document.getElementById("problem").innerHTML="<p>Devise a function that receives a string and computes its reverse with a recursive method. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img41.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js41.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p42Func() {
   document.getElementById("problem").innerHTML="<p>Devise a function that receives a natural number and computes how many digits 7 is in that number with a recursive method. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img42.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js42.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p43Func() {
   document.getElementById("problem").innerHTML="<p>Devise a function that receives two natural numbers and computes their multiplication with a recursive method. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img43.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js43.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p44Func() {
   document.getElementById("problem").innerHTML="<p>Assume an array of 20 non-descending numbers exists. Receive a number from user and determine if that number exists in the array or not. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img44.png");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js44.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p45Func() {
   document.getElementById("problem").innerHTML="<p>Draw a flowchart for a program to say Dice rolls are “value1” and “value2”, where value1 and value2 are the results of your random numbers. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img40.PNG");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js40.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

function p46Func() {
   document.getElementById("problem").innerHTML="<p>Draw a flowchart for a program to say Dice rolls are “value1” and “value2”, where value1 and value2 are the results of your random numbers. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img40.PNG");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js40.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}


function p47Func() {
   document.getElementById("problem").innerHTML="<p>Draw a flowchart for a program to say Dice rolls are “value1” and “value2”, where value1 and value2 are the results of your random numbers. </p>";

   document.getElementById("flowchart").setAttribute("src","images/img40.PNG");
   document.getElementById("flowchart").style.display="none";

   document.getElementById("js").setAttribute("src","images/js40.png");
   document.getElementById("js").style.display="none";

   document.getElementById("another").setAttribute("src","");
   document.getElementById("another").style.display="none";
 
   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}
