let n=153;
let tmp=n;
let rev=0;
let rem;
let s=n.toString().length;
while(tmp>0){
//if(!isNaN(tmp)){
rem=tmp%10; //last digit
rev=rev+Math.pow(rem,n.toString().length);
tmp=parseInt(tmp/10);
}
//}
if(rev===n){
	console.log("Armstrong number");
}
else{
 console.log("not Armstrong..");
}
