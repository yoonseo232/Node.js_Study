//npm i puppeteer

const puppeteer = require('puppeteer');
(async () => {
    const brower = await puppeteer.launch({
        headless : false //작업과정 확인
    }); //브라우저 확인
    const page = await brower.newPage(); //새창열기
    await page.goto('https://www.naver.com'); //페이지 이동
    page.setViewport({
        width:1920,
        height:1080,
        deviceScaleFactor:1
    });

    await page.screenshot({path: 'example2.png'});

    await page.pdf({
        path: "examplePDF.pdf",
        format: "A4"
    });
    
    await brower.close(); //브라우저 닫기(종료)
})();