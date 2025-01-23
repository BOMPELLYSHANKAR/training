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
// function add(a,b){
//     return a+b;
// }
// result=add(10,5)
// console.log(result);
//**higher order funtion**
// function hof(a){
//     return a;
// }
// let x=hof([10,20,30,40,50])
// console.log(x)
// let y=hof(function(){return "this is an callback funtion"})
// y()
// function add (callback){
//     return callback(5,3);
// }
// let x=add(function(a,b){return a+b});
// console.log(x)
let users=["navya","vishnu","keshav","shravan"];
// console.log(users[0])
// console.log(users[1])
// console.log(users[2])
// console.log(users[3])
// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
// }
// let x=users.map((user)=>{
//     //console.log(user)
//     return user
// })
// console.log(x)

// The forEach method returns undefined, so assigning its result to x won't give you the array of users
// let x=users.forEach((user)={
//     return (user)
// })
// console.log(x);
// var a=10
// let b=30
// function x(){
// var user="sravan"
// let company="amazon"
// const sal=500000
// console.log(user)
// console.log(company)
// console.log(sal)
// console.log(a,b)
// }