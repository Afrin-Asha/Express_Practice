var express = require('express');
// var bodyParser=require('body-parser');
var multer =require('multer');

var app =express();






//request query using get
// app.get('/',function(req,res){
    
//     let firstName = req.query.firstName;
//     let lastName = req.query.lastName;

//     res.end(firstName+" "+lastName);
// });

//Header get
// app.get('/',function(req,res){
    
//     let firstName = req.header('firstName');
//     let lastName = req.header('lastName');

//     res.end(firstName+" "+lastName);
// });
// simple post request
//post request
// app.post('/',(req,res)=>{
//     res.end("This is a simple post request");   
// })

// URL params query same as get reponse 
// app.post('/',(req,res)=>{
//     let firstName = req.query.firstName;
//     let lastName = req.query.lastName;

//     res.send(firstName+" "+lastName);//https://localhost:3000/?firstName=Sanjida&lastName=Afrin 
// })

//Header post request
// app.post('/',(req,res)=>{
//     let userName = req.header('userName');
//     let password = req.header('password');
//     res.send("User Name : "+userName+" Password : "+password);
// }   )

//json body post request

//  app.use(bodyParser.json());
//  app.post('/',(req,res)=>{
//      let JSONData =req.body;
//      let name=JSONData['name'];
//      let city=JSONData.city;
//     //  let JSONString =JSON.stringify(JSONData);
//      res.send("Json data : name "+name+" city "+city);
//  })

//using multer for multipart form data

// var multer=multer();
// app.use (multer.array());
// app.use(express.static('public'));
// app.post('/',function(req,res){
//     let JSONData=req.body;
//     res.send(JSON.stringify(JSONData));
// })


//using multer for uploading from diskstorage

// var storage =multer.diskStorage({
//     destination:function (req,file,cb) {//destination
//         cb(null,'./up');
//     },
//     filename:function (req,file,cb) {//filename
//         cb(null,file.originalname);
//     } 
// });
// var upload =multer({storage:storage}).single('myfile');
// app.post('/',function(req,res){
//     upload(req,res,function(error){
//         if(error){
//             res.send('File upload failed');

//         }else{
//             res.send("File upload successfull");
//         }
//     });
// });

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})