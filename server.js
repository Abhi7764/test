const express=require("express");
const app=express(); 
const path = require("path");
app.use(express.static("."));
app.use(express.urlencoded());

//!get on the form data
app.get("/getdata",(req,res)=>{
    console.log(req.query);
    console.log("From get Data");
    //res.end();
    res.send("Welcome "+req.query.Username);
})

//! post on the form data
app.post("/getdata",(req,res)=>{
    console.log(req.body);
    console.log("From post Data");
    res.send("welcome "+req.body.Username)
    //res.end();
})

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./login.html"));
})
                    
app.listen(3000,(err)=>{
    console.log("Server Started.......")
})
