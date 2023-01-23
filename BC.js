const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var InFile = "yes";
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});
app.post("/", function(req,res){
    if (InFile === "yes"){
    res.sendFile(__dirname + "/BC-SignIn.html");
    InFile = "no";
    }else{
    const logIns={
        Username:req.body.UName,
        password:req.body.PWName,
        Email:req.body.Email
    }
    if(logIns.Email === "" || logIns.Username === "" || logIns.password === ""){
        res.sendFile(__dirname + "/problem.html");
        app.post("/",function(){
            res.sendFile(__dirname + "/BC-SignIn.html");
        });
    }
    res.sendFile(__dirname + "/index.html");
     InFile = "yes";
    }
});

app.listen(4000, function(){
    console.log("server 4000 started ");
});


