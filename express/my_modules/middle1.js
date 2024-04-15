const middle1 = (req, res, next) => {
    console.log("미들웨어 실행 모듈");
    next();
};

module.exports = middle1;

