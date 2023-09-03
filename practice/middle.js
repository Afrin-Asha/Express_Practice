var express = require('express');
// var bodyParser=require('body-parser');
var multer =require('multer');

var app =express();
//Application level middleware
// app.use(function(req,res,next){
    
//     console.log("I am app level middleware")
//     next();
// })

//route level middleware
app.use('/about',function(req,res,next){
    
    console.log("Hello I am about page middleware")
     next()
 })

app.get('/',(req,res)=>{
    res.send("Hello from home page");
})


app.get('/about',(req,res)=>{
    res.send("Hello from about page");
})
app.get('/contact',(req,res)=>{
    res.send("Hello from contact page");
})
app.get('/terms',(req,res)=>{
    res.send("Hello from terms");
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})