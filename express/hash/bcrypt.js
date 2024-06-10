const bcrypt = require('bcrypt');
// npm install bcrypt
const saltRounds = 10;
const myPlaintextPassword = 'my password';

async function hashPassword(){
    try{
        const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);

        //해시 값을 메모리에 저장
        const hashedPassword = hash;
        console.log("Hashed Password : ", hashedPassword);
    
        //비밀번호 비교
        const inputPassword = "my password";
        const match = await bcrypt.compare(inputPassword, hashedPassword);
        console.log("password match result : ", match);
    }catch(err){
        console.log('Error : ', err);
    }
    //해당 블록에서 에러에 대한 
}
hashPassword();

