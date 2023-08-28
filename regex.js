// let validRegexp = /^[A-Za-z]*[A-Za-z][A-Za-z0-9_]*$/i;
// if(validRegexp.test("a123_asd1_23fsdf")) {
//    console.log('====================================');
//    console.log("okee");
//    console.log('====================================');
// }

// let validRegexp2 = /[.]*$/i;
// if(validRegexp2.test("•")) {
//    console.log('====================================');
//    console.log("•");
//    console.log('====================================');
// }

// let validRegexp = /^[\p{Hiragana}\p{Katakana}\p{Han}\p{Latin}\d]+_[\p{Hiragana}\p{Katakana}\p{Han}\p{Latin}\d]+$/i;
// let a = new XRegExp("^[\p{Hiragana}\p{Katakana}\p{Han}\p{Latin}\d]+_[\p{Hiragana}\p{Katakana}\p{Han}\p{Latin}\d]+$");
let pHiragana = "[\\u3041-\\u3096\\u309D-\\u309F]|\\uD82C\\uDC01|\\uD83C\\uDE00";
let pKatakana = "[\\u30A1-\\u30FA\\u30FD-\\u30FF\\u31F0-\\u31FF\\u32D0-\\u32FE\\u3300-\\u3357\\uFF66-\\uFF6F\\uFF71-\\uFF9D]|\\uD82C\\uDC00";
let pHan = "[\\u2E80-\\u2E99\\u2E9B-\\u2EF3\\u2F00-\\u2FD5\\u3005\\u3007\\u3021-\\u3029\\u3038-\\u303B\\u3400-\\u4DB5\\u4E00-\\u9FD5\\uF900-\\uFA6D\\uFA70-\\uFAD9]|[\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872][\\uDC00-\\uDFFF]|\\uD869[\\uDC00-\\uDED6\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF34\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1]|\\uD87E[\\uDC00-\\uDE1D]";
let rx = new RegExp("^([^\\W_]|" + pHiragana + "|" + pKatakana + "|" + pHan + ")+_" + "([^\\W_]|" + pHiragana + "|" + pKatakana + "|" + pHan + ")+$");
let rx2 = new RegExp("[^\\W_]");
let rx3 = new RegExp(pKatakana);
console.log(rx2.test("a"));
console.log(rx3.test("ﾅ"));

let str = toASCII("TＡＶＡＳＶＡ１２３e_TrＡＶＡＳ＼ＶＡ１２３１");
let str2 = toASCII("Te_Tr２１３１３１３１３２１３１３２１１３５４２１３２１６５４８７８７９８４０５４２１３１５４");
let str3 = toASCII("Module_Test1231234561234561324\\65123国国国国国国国ﾅﾅﾅﾅﾅﾅﾅﾅ");

// console.log(rx.test("Module_Test123123456123456132465123国国国国国国国ナナナナナナナナ"));
// console.log(rx.test(str3));
// console.log(rx.test("Module_Test123123456123456132465123国国国国国国国ﾅﾅﾅﾅﾅﾅﾅﾅ"));
// console.log(rx.test("asdasd__asdasd"));
// console.log(rx.test(str));
// console.log(rx.test(str2));
// if(a.test("Module_国国国国国国国ﾅﾅﾅﾅﾅﾅﾅﾅ")) {
//    console.log('====================================');
//    console.log("okee");
//    console.log('====================================');
// }

// read more http://php.net/manual/en/function.mb-strwidth.php
function mbStrWidth(input) {
    let len = 0;
    for (let i = 0; i < input.length; i++) {
        let code = input.charCodeAt(i);
        if ((code >= 0x0020 && code <= 0x1FFF) || (code >= 0xFF61 && code <= 0xFF9F)) {
            len += 1;
        } else if ((code >= 0x2000 && code <= 0xFF60) || (code >= 0xFFA0)) {
            len += 2;
        } else {
            len += 0;
        }
    }
    return len;
}

// console.log('====================================');
// console.log(mbStrWidth("ａ"));
// console.log('====================================');

function toASCII(chars) {
    var ascii = '';
    for(var i=0, l=chars.length; i<l; i++) {
        var c = chars[i].charCodeAt(0);

        // make sure we only convert half-full width char
        if (c >= 0xFF00 && c <= 0xFFEF) {
           c = 0xFF & (c + 0x20);
        }

        ascii += String.fromCharCode(c);
    }

    return ascii;
}

// console.log('====================================');
// console.log(toASCII("Module_Test123123456123456132465123国国国国国国国ﾅﾅﾅﾅﾅﾅﾅﾅ"));
// console.log("a?kjl");
// console.log("ａ？｜＼］ｋｊｌ");
// console.log('====================================');


function toASCII2(chars) {
    var ascii = '';
    for(var i=0, l=chars.length; i<l; i++) {
        console.log('====================================');
        console.log(chars[i]);
        console.log('====================================');
    }

    return ascii;
}

// toASCII2("ａ？｜＼］ｋｊｌ");