const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    //("키","값",{속성})
    res.cookie("cookie", "chickchock", {
        maxAge:500000
    });
    
    res.login("name", "김윤지", {
        maxAge:500000
        
    });

    if(req.cookies.name){
        res.send(`<h1>${req.cookies.name}입니다.</h1>`)
    }else{
        res.send(`<h1>로그인되지 않았습니다</h1>`)
    }
    res.send("<h1>홈입니다</h1>");
});

app.get("/cookie", (req, res) => {
    const c1 = req.cookies.cookie;
    console.log(c1);
    res.send(`<h1>쿠키페이지</h1><br/>${c1}`);
});

app.get("/clear", (req, res) => {
    res.clearCookie("cookie");
    res.send(`<h1>쿠키 삭제</h1>`);
});

app.get("/login", (req, res) => {
    const c2 = req.cookies.name;
    console.log(c2);
    res.send(`<h1>쿠키 키값 이름으로 설정</h1><br/>${c2}`);
});

app.get("/logout", (req, res) => {
    res.clearCookie("name");
    res.send(`<h1>쿠키 값 제거 삭제</h1>`);
});

app.listen(3000);