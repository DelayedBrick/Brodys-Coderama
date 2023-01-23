function asd(){
    const logIns={
        Username:req.body.UName,
        password:req.body.PWName,
        Email:req.body.Email
    }
    if(logIns.Email === "" || logIns.Username === "" || logIns.password === ""){
        alert("a;sldkfjas;dflk");
    }
    alert("you have succesfuly been signed in 😊");
};
