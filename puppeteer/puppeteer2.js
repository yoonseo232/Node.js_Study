//npm i puppeteer

const puppeteer = require('puppeteer');
async function getData(){
    try{
        const brower = await puppeteer.launch({
            headless : false //작업과정 확인
        }); //브라우저 확인
        const page = await brower.newPage(); //새창열기
        await page.goto('https://www.yes24.com/Product/Category/BestSeller?CategoryNumber=001&sumgb=06'); //페이지 이동
        
        const bookList = await page.evaluate(() => {
            let books = [];
            let elements = document.querySelectorAll("#yesBestList > li");
            elements.forEach(elem => {
                books.push(elem.querySelector("div.item_info > div.info_row.info_name > a.gd_name").innerText);
            });
            return books;
        });
        console.log("책 제목", bookList);

    await brower.close(); //브라우저 닫기(종료)

    }catch(error){
        console.error(error)
    }
}

getData();