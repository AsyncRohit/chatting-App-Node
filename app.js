const express=require('express');
const app=express();
const path=require('path');

const socketIo=require("socket.io");
const http=require('http');
const server=http.createServer(app);
const io=socketIo(server)



io.on("connection",function(socket){
    socket.on("message",function(message){
        io.emit("message", message);
    })
})

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render('index');
})


server.listen("3000",()=>{
console.log("connected");
});