// const express = require('express');
// const bodyParser=require ('body-parser');

// //const events = require ('events');
// const app = express();
// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/", function(req,res){
//     res.sendFile(__dirname+"calculatorbmi.html");
// });

// app.post("/",function (req,res){
//     const weight = Number(res.body.w);
//     const height = Number(res.body.h);
//     const result= weight/height;

//     res.send("the bmi is " + result);
// })

// app.post("/", function (req,res){
//     res.send("thank you for entering the details");
// });

// app.listen(3000, function (){
//     console.log('server is running in port 3000');
// })