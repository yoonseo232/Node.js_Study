const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser()); //req, res 요소에서 쿠키 사용 가능

app.get("/setUser", (req,res)=> {
    //쿠키 생성
    res.cookie("user", {
        name : "kim",
        age : 5
    });
    res.redirect("/getUser");
});

app.get("/getUser", (req,res) => {
    res.send(req.cookies);
});

app.listen(8889, function(){
    console.log("8889 포트입니다");
});
