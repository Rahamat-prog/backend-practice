// import http from 'http' -> for type module 
const http = require('http')
const { json } = require('stream/consumers')

//🚀 Day 3: Step 1 — Create Basic Server (Core Node.js)

// const server = http.createServer((req, res) => {
//     res.end("server is created by core node js")
// })

// server.listen(3000, () => {
//     console.log("server is running at port 3000")
// })



//🚀 Day 3: Step 2 — Handle Routes (Very Important)

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('This is home page')
//     }
//     else if(req.url === '/about'){
//         res.end('this is about page')
//     }
//     else if(req.url === '/contact'){
//         res.end('Contact page')
//     }
//     else{
//         res.end('page not found')
//     }
// })

// server.listen(3000, () => {
//     console.log("server is running at port 3000  ")
// })


// 🚀 Day 3: Step 3 — Send JSON Response (Interview Favorite)

// const server = http.createServer((req, res) => {
//     if(req.url === '/product') {
//         let user = [
//             {laptop: 'HP',price: 40000},
//             {laptop: 'Dell',price: 50000},

//         ]

//         res.setHeader('Content-Type', 'application/json')
//         res.end(JSON.stringify(user))
//     }
//     else{
//         res.end('other Route')
//     }
// })

// server.listen(3000, () => {
//     console.log("server is running at port 3000 ")
// })



//🚀 Day 3: Step 4 — Handle Request Method (GET / POST)

// const server = http.createServer((req, res) => {
//      let user = [
//         {id: 1, name: 'John', age: 32},
//         {id: 2, name: 'Rohan', age: 23}
//        ]

//     if(req.method === 'GET' && req.url==='/user') {

//        res.writeHead(200, {'Contain-Type': 'application/json'})
//        res.end(JSON.stringify(user))
//     }
//     else if(req.method === 'POST' && req.url === '/data'){

//         res.writeHead(201, {"Contain-Type": "application/json"})
//         res.end(JSON.stringify(user))
//     }
//     else if(req.method === 'PUT' && req.url === '/user/1'){
        
//         res.writeHead(200, {'Contain-type': 'application/json'})
//         res.end(JSON.stringify({
//             message: 'user updated',
//             id: 1,
//             name: 'John updated',
//             age: 43
//         }))
//     }
//     else{
//         res.writeHead(404, {"Contain-Type" : "applicaton/json"})
//         res.end('page not found')
//     }
// })

// server.listen(3000, () => {
//     console.log("server is running at port 3000 ")
// })



