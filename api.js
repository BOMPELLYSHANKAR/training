// // function fetchUsers(){
// //     let res=window.fetch("https://api.github.com/users")
// //     // console.log(res);
// //     res.then(val =>{
// //         // console.log(val)
// //         val.json().then(data=>{
// //             console.log(data)
// //         })
// //     })
// // }
// // fetchUsers()
// function fetchUsers(){
//     let x=fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(x);
//     x.then((response)=>{
//         // console.log(response)
//         // console.log(response.json())
//         return response.json().then(data=>{
//             // console.log(data);
//             let store=document.getElementById("store");
//             // console.log(store);
//             data.map((user)=>{
//                 // console.log(user)
//                 store.innerHTML+=`
//                 <tr>
//                     <td>${user.id}</td>
//                     <td>${user.name}</td>
//                     <td>${user.email}</td>
//                     <td>${user.company.name}</td>
//                 </tr>
//                 `
//             })
//         })
//     })
//     .catch(err=>console.log(err))
// }
// fetchUsers()
//ASYNC && await

// let p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             resolve("Promise successfully completing");
//     },3000)
// })
// async function demo(){
//     console.log("start");
//     let x=await p;
//     console.log(x);
//     console.log("ends")
// }
// demo()
// async function fetchUsers() {
//     let response=await fetch("https://jsonplaceholder.typicode.com/users")
//     let data=await response.json();
//     console.log(data)
// }
// fetchUsers()
//DOM:DOCUMENT OBJECT MODEL
//dom is a web api used to manipulate the html content
//--dom is used to add func
console.log(window)