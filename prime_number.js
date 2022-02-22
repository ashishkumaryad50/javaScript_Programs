let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { // for each i...
  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }
  console.log( i ); // a prime
}

 // prime number
let num = 12
let nonPrime=false

if(num===1 || num===0){
  console.log("The Number is neither Prime nor non Prime ")
}else if(num>1){
for(let i=2;i<=num/2;i++){
  if(num%i==0){
  nonPrime=true;
  break;
  }
  }}
if(nonPrime==false)
console.log("Number is Prime...");
else
console.log("number is non Prime...")

 
 // prime number range
let upperLimit=55,lowerLimit=1;
for(let j=lowerLimit;j<=upperLimit;j++){
let num = j
let nonPrime=false
if(num===1 || num===0){
  nonPrime=true;
	console.log("The Number is neither Prime nor non Prime ")
}else if(num>1){
for(let i=2;i<=num/2;i++){
	if(num%i==0){
  nonPrime=true;
  break;
  }
  }}
if(nonPrime==false)
console.log(num);
}
