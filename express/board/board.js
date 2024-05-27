const express = require("express");
const app = express();

const dotenv = require("dotenv").config(); //.env를 생성

const morgan = require("morgan");
app.use(morgan('dev'))

const cors = require("cors");
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials:true
}));

//포트 설정
app.set('port', process.env.PORT || 8080);

app.set('port', process.env.PORT);
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), "빈 포트에서 서버 실행");
});


app.use(express.json());
app.use(express.urlencoded({extended:true}));

//게시글 데이터
let boardList = [];
let numOfBoard = 1;

//게시글 API
app.get('/', (req, res) => {
    res.send("게시글 API 확인");
});

app.get("/board", (req, res) => {
    res.send(boardList);
});

app.post("/board", (req,res) => {
    const board = {
        "id":numOfBoard,
        "user_id":req.body.user_id,
        "date":req.body.date,
        "title":req.body.title,
        "content":req.body.content
    };
    boardList.push(board);
});