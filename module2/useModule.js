const {text_odd, text_even} = require("./moduleText");

function checkStringOddOrEven(str){
    if(str.length % 2){
        return text_odd;
    }
    return text_even;
}

console.log(checkStringOddOrEven("안녕"));
console.log(checkStringOddOrEven("하십니까요"));

module.exports = [checkStringOddOrEven, text_even, text_odd];
