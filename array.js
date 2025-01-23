let userdetails={
    name:"shankar",
    age:20,
    city:"hyderabad"
}
console.log(userdetails)
console.log(userdetails.name)
console.log(typeof(userdetails))
//stringify method
let x=JSON.stringify(userdetails)

console.log(x)
console.log(x.name)
console.log(typeof(x))
//parse method
let y=JSON.parse(x)
console.log(y)
console.log(typeof(y))