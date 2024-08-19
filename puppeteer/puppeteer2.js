//npm i puppeteer

const puppeteer = require('puppeteer');
async function getData(){
    try{
        const brower = await puppeteer.launch({
            headless : false //작업과정 확인
        }); //브라우저 확인
        const page = await brower.newPage(); //새창열기
        await page.goto('https://www.yes24.com/Product/Category/BestSeller?CategoryNumber=001&sumgb=06'); //페이지 이동

        await Promise.all([
            page.select("select#pg_size","120"),
            page.waitForNavigation({waitUntil: "networkidle0", timeout:0})
        ]);
        
        const bookList = await page.evaluate(() => {
            let books = [];
            let elements = document.querySelectorAll("#yesBestList > li");
            elements.forEach(elem => {
                const book = {
                    title: elem.querySelector("div.item_info > div.info_row.info_name > a.gd_name").innerText,
                    rank: elem.querySelector(".ico.rank").innerText,
                    img: elem.querySelector("em.img_bdr > img").getAttribute('src'),
                    auth: elem.querySelector("div.item_info > div.info_row.info_pubGrp > span.info_auth").innerText,
                    pub: elem.querySelector("div.item_info > div.info_row.info_pubGrp > span.info_pub").innerText,
                    
                }
                books.push(book);
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