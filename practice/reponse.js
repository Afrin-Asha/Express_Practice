var express = require('express');
app =express();

//simple string response get
app.get('/one',function(req,res){
    res.send("Simple String response one");
});
//simple string response post
app.post('/two',function(req,res){
    res.send("Simple String response two");
});
//response status code
app.get('/three',function(req,res){
    res.status(401).send("status unauthorized three");
});
//JSON response
app.get('/four',function(req,res){
    let MyJsonresponse=[
        {
        name:"Sanjida Afrin",
            age:25,
            address:"Rangpur"
        },
        {
            name:"Rakibul Islam",
            age:23,
            address:"Dhaka"
        },{
            name:"Shahadat Hossain",
            age:27,
            address:"Chittagong"
        }
    ]
    res.json(MyJsonresponse);

});
//download response

app.get('/five',function(req,res){
    res.download('./uploads/pic.jpg');
})
//redirecting

app.get('/Bangladesh',function(req,res){
    res.redirect('http://localhost:3000/India');
})

app.get('/India',function(req,res){
    res.send("This is india");
})
//reponse Header

app.get('/six',function(req,res){
//res.append(key value of header)
    res.append("name","Sanjida Afrin");
    res.append("age",25);
    res.append("address","Rangpur");
    res.append("country","Bangladesh");
    res.status(201).end("Hello from response header body");
})

//response cookie

app.get('/seven',function(req,res){
    res.cookie("name","Afrin");//(key ,value)
    res.cookie("city","Rangpur");
    res.end('Cookie set successfully');
})
//clear cookie

app.get('/eight',function(req,res){
    res.clearCookie("name");
    res.clearCookie("city");
    res.end("Cookie clear Successfully")
})

// app.get('/',(req,res)=>{
//     res.send("Hello from home page");
// })

// app.get('/about',(req,res)=>{
//     res.send("Hello from about page");
// })
// app.get('/contact',(req,res)=>{
//     res.send("Hello from contact page");
// })
// app.get('/terms',(req,res)=>{
//     res.send("Hello from terms");
// })

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})