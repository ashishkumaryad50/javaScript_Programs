let str="ashish kumar yadav"
var words= str.split(' ').reverse().join(' ')
console.log(words)

var letters= str.split('').reverse().join('')
console.log(letters)

//  output : hsihsa ramuk vaday  
let str='Ashish Kumar Yadav'
let revWords= str.split(' ').map((ele)=>{
  return ele.split('').reverse().join('')
});
console.log(revWords)


//reverse of number

  
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
console.log(rev)
