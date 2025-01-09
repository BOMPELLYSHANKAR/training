// //without parameters and arguments
// function demo(){
//     console.log("hello i am funtion demo !")
// }
// demo()
// with parameters and arguments

// function add(a,b){
//     console.log(a+b)
// }
// add(10,20)
// add(5,6)
// add(3,4)
// function addtocart(){
//     document.body.style.background='peel';
//     document.alert()
// }
//TYPES OF FUNCTIONS
//named function example
// let rev='';
// function isPalindrome(str){
//     for(let i=str.length-1;i>=0;i--){
//         rev+=str[i];
//     }
//     if(rev === str){
//         console.log("it is a palindrome");
//     }
//     else{
//         console.log("it is not a palindrome")
//     }
// }
// isPalindrome("madam");
// funtion expression
// let x=function(){
//     console.log("function expression")
// }
// //console.log(x)
// x()
// !IIFE
// (
//     function(){
//         console.log("IIFE");
//     }
// )
// ();
//ARROW FUNTION
// let x= (a,b) =>console.log(a+b);
// x(10,5);
// RETURN KEYWORD--IMPLICIT RETURN,EXPLICIT RETURN
// let x=(a,b)=> console.log(a+b);
// x(10,5) //implicit return
function add(a,b){
    return a+b;
}
result=add(10,5)
console.log(result);