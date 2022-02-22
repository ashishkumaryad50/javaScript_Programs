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
