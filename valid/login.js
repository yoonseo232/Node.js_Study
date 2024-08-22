const express = require('express');
const {body, validationResult} = require("express-validator");

//npm i express
//npm i express-validator
//npm i ejs
const app = express();
const path = require('path');

//ejs 설정
app.set("view engine", "ejs");
app.set("viesw", path.join(__dirname, 'views'));

//정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

//하드코딩된 사용자 정보(원래는 DB)
const users = [
    {username: 'admin', password: "password123"},
    {username: 'normal', password: "normal1"}
];

//로그인 페이지 라우트
app.get("/login", (req, res) => {
    res.render("login");
});

app.listen(3000, () => {
    console.log("Server is running");
});