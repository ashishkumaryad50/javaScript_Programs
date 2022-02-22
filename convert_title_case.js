let str= 'barkha'
let newStr=str.charAt(0).toUpperCase();
console.log(newStr)
let strin=newStr+str.slice(1);
console.log(strin);
//using Regex: which matches the first char of string
let a=str.replace(/^./,str[0].toUpperCase());
console.log(a);

//make first letter capital in every word
let sent='i am a student of mca final year'
let newSent=sent.split(' ').map((ele)=>{
return (
//using Regex: which matches the first char of string
ele.replace(/^./,ele[0].toUpperCase())
)
}).join(' ')
console.log(newSent)
