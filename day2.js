import axios from 'axios';
import fetch from 'node-fetch';

// 🚀 Day 2: Step 1 — What is Async

// console.log("start");

// setTimeout( () => {
//     console.log("inside setTime fn")
// },2000)

// console.log("end");



// promise -> I will give you result later - success or fail.

// let myPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if(success) {
//         resolve("task is completed")
//     }
//     else {
//         reject("task is failed")
//     }
// })

// myPromise
//     .then(result => console.log(result))
//     .catch(error => console.log(`something filed ${error}`))



//Option 2: Chain Directly (No Variable)

// new Promise((resolve, reject) => {
//   resolve("Task completed");
// })
//   .then(result => console.log(result))
//   .catch(error => console.log(error));



// 🚀 Day 2: Step 3 — async / await (VERY IMPORTANT) - > async/await = cleaner way to handle Promises

// function getData() {
//     return new Promise((resolve) => {
//        setTimeout(() => {
//         resolve("data received")
//        }, 2000)
//     })
// }

// async function fetchData() {
//     const result = await getData()
//     console.log(result);
// }

// fetchData()



// function getData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello from async");
//         },2000)
//     })
// }

// async function fetchData() {
//     const result = await getData();
//     console.log(result);
// }
// console.log("before fetch data")
// fetchData()
// console.log("after fetch data")


// OPTION 2: One function (GOOD for simple use)

// async function getData() {
//     let result = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello i am promise, handle by one function but you can't reuse me")
//         }, 2000);
//     })
//     console.log(result)
// }

// getData()



//🚀 Day 2: Step 4 — API Call using fetch

// async function getUsers() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json()
//     data.forEach(element => {
//         let name = element.name
//         console.log(name)
//     })
  
// }

// getUsers()


//Option 3: Use axios Instead (Alternative)

// async function getUsers() {
//     let response = await axios.get("https://jsonplaceholder.typicode.com/users");
//     // console.log(response)
//     let data = response.data
//     console.log(data)
    
// }

// getUsers();


//🚀 Day 2: Step 5 — Error Handling + Mini Challenge -> print the name only with the start letter K from the api

async function getUsers() {
    try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/users");
        let data =  response.data;
        data.forEach(element => {
            let name = element.name;
            if(name.startsWith("K")) {
                console.log(name)
            }
        })
       
    } catch (error) {
        console.log("error", error)
    }
}

getUsers();