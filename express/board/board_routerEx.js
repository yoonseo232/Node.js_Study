//이거 board 폴더 안에 있어욥~!~~!~!
//npm install express
const express = require("express");
const app = express();
 //npm install dotenv
const dotenv = require("dotenv").config(); //기본값 .env파일 생성함. 그 안에 설정값 기입

 //npm install morgan
const morgan  = require("morgan");
app.use(morgan('dev'));

 //npm install cors
const cors    = require("cors");
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials:true
}));

//npm install ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

// 포트 설정
app.set('port', process.env.PORT || 8080 );

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),"번 포트에서 서버 실행");
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const boardRouter = require('./board_router');
app.use('/board',boardRouter);

