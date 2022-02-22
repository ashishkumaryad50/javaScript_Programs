//0 1 1 2 3 5 8 Fibinacci Series
let n1=0;
let n2=1
let n3=0;
console.log(n1);
console.log(n2);
let terms=15;
let i=0;
while( i<terms)
{
 n3=n1+n2;
  console.log(n3)
 n1=n2;
 n2=n3;
 i++;
}
