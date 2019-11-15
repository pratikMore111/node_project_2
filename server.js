const express = require("express")
const app = express();

app.get("/",function(req,res){
    res.send("<h1>My node application..!</h1>");
})

app.listen(4000,function(){
    console.log("started at port 4000");
})