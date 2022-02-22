//  string Palindrom
let str="Ma'am";
let words=str.toLowerCase()

let newStr=words.split('').reverse().join('')
if(words===newStr){
console.log("string is Palindrom")
}else{
console.log("string is not Palindrom")
}

// number palindrom

let n=1211
let tmp=n;
let rev=0;
let rem;
while(tmp>0){
//if(!isNaN(tmp)){
rem=tmp%10; //last digit
rev=(rev*10)+rem;
tmp=parseInt(tmp/10);
}
//}

if(rev===n)
  console.log("Palindrome number..");
else  
  console.log("not Palindrome number..");
