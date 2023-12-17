const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req,res){
   res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
   // console.log(req.body.num1); //num1 comes from the name attribute from index.html
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);

    const result = num1 + num2;
    res.send('the result of the calculation is:' + result);

})


app.post("/", function(req,res){
    res.send('thank you for entering the details');
});

app.get("/calculatorbmi",function (req,res){
    res.sendFile(__dirname + "/calculatorbmi.html");
});

app.post("/calculatorbmi",function (req,res){
    var weight = parseFloat(req.body.w);
    var height = parseFloat(req.body.h);
    var resultbmi= weight/(height*height);

    res.send("the bmi is " + resultbmi);
})

app.listen(3000, function(){
    console.log('Server is running in port 3000.');
});