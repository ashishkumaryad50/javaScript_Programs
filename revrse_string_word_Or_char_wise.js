let str="ashish kumar yadav"
var words= str.split(' ').reverse().join(' ')
console.log(words)

var letters= str.split('').reverse().join('')
console.log(letters)


//  output : hsihsa ramuk vaday  
let str='Ashish Kumar Yadav'
let revWords= str.split(' ')
let newWords=revWords.map((ele)=>{
  return ele.split('').reverse().join('')
});
console.log(newWords)
