// const http = require('http');
// const express=require('express');
// const { append } = require('express/lib/response');
// const router=require('./router')

// const server =http

// http.createServer((req, res)=>{
//   console.log(req)
//   res.write('Hello Kiyoko')
//   res.end()
// }).listen(8000, ()=>console.log("Server is running!"))

// app.use((req,res,next)=>{
//   console.log("running")
//   res.send('<h1>Kiyoko</h1>')

// })

const http = require('http')
const routes = require('./routes')

const server = http.createServer(routes)
server.listen(8000)


 