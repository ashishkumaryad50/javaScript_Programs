 //Check if the number has same last digit
let n1=563
let n2=86
let n3=7896

if((n1%10)==(n2%10)&&(n1%10)==(n3%10))
  console.log("same..");
else
  console.log("not same...")

 //Check if the number has same first digit
let n1 = 563
let n2 = 586
let n3 = 5896;

let m1 = Math.pow(10, (n1.toString().length) - 1);
let m2 = Math.pow(10, (n2.toString().length) - 1);
let m3 = Math.pow(10, (n3.toString().length) - 1)
if ((parseInt(n1 /m1)) == (parseInt(n2 /m2)) && (parseInt(n1 / m1)) == (parseInt(n3 / m3)))
    console.log("same..");
else
    console.log("not same...")

