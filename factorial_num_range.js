//Factorial NUmber
let n=5;
let fact=1;
for(let i=n;i>=1;i--){
	fact=fact*i;
}
/* console.log(fact); */

//print Factorals in the given range
let upperLimit=5,lowerLimit=1;
for(let j=lowerLimit;j<=upperLimit;j++){
let fct=1;
for(let k=j;k>=1;k--){
  fct=fct*k;
}
console.log(fct);
}
