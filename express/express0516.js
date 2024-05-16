// npm i express-session

const express = require('express');
const app = express();
const sesstion = require('express-session');

app.use(sesstion({
    secret : "AnimalBananaCandy",
}));

app.get("/setUser", (req, res)=>{
    req.session.user = {name: "kim", age: 5};
    res.redirect("getUser");
})

app.get("/getUser",(req,res)=>{
    res.send(req.session.user);
})

app.get("/deleteSession", (req, res) => {
    if(req.session){
        req.session.destroy(() => {
            res.redirect("getUser");
        })
    }else{
        res.send("제거할 세션이 없습니다.");
    }
});

app.get("/setUser/:name", (req, res) => {
    req.session.user = {
        name : req.params.name,
        age : 5
    };
    res.redirect("/getUser");
});

app.get("/", (req, res) => {
    if(req.session){
        res.send("세션있음!");
    }else{
        res.send("세션없음!");
    }
});

app.listen(8889,()=>{
    console.log("8889 포트");
});