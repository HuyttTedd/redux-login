const { log } = require("console");

function check_Half_width_Number (input_val, event) {
    var code = 0;
    var each_val = input_val.split('');
    var flag = 0;
    each_val.forEach(function (key) {
        let code = key.charCodeAt();
        if ((12352<= code && code <= 12447) || 
            (12448<= code && code <= 12543) || 
            (19968<= code && code <= 19893)) {
            flag=1;
        }
    });

    return flag;
}

// read more http://php.net/manual/en/function.mb-strwidth.php
function mbStrWidth(input) {
    let len = 0;
    let isFull = true;
    for (let i = 0; i < input.length; i++) {
        let code = input.charCodeAt(i);
        if ((code >= 0x0020 && code <= 0x1FFF) || (code >= 0xFF61 && code <= 0xFF9F)) {
            len += 1;
        } else if ((code >= 0x2000 && code <= 0xFF60) || (code >= 0xFFA0)) {
            isFull = false;
            break;
        } else {
            len += 0;
        }
    }
    return isFull;
}

console.log('======================33333333333==============');
console.log(check_Half_width_Number("123"));
console.log(mbStrWidth("asdasdａｓｄａｓ＿ａｓｄａasdasd"));
console.log(mbStrWidth("これは日本語です"));
console.log('====================================');


function isKanji(ch) {
    return (ch >= "\u4e00" && ch <= "\u9faf") ||
	(ch >= "\u3400" && ch <= "\u4dbf");
}
function checkHasKanji(str) {
    return Array.prototype.some.call(str, function (ch) {
        return (ch >= "\u4e00" && ch <= "\u9faf") ||
	(ch >= "\u3400" && ch <= "\u4dbf");
    });
}



function hasKanji(input) {
    let len = 0;
    let isFull = false;
    input = input.split('');
    for (let i = 0; i < input.length; i++) {
        let ch = input[i];
        if ((ch >= "\u4e00" && ch <= "\u9faf") ||
        (ch >= "\u3400" && ch <= "\u4dbf")) {
            isFull = true;
        }
    }
    return isFull;
}

console.log(isKanji("a")); // false
console.log(isKanji("あ")); // false;
console.log(checkHasKanji("00aaaaaaaaaaa22")); // false;
console.log(checkHasKanji("会aaaaaaaaaaaaaa")); // true;
console.log('&&&&&&&&&&&&&&&&&'); // true;

// function isKatakana(ch) {
//     return (ch >= "\u30a0" && ch <= "\u30ff");
// }
// console.log('====================================');
// console.log('====================================');
// console.log(isKatakana("バー1asdasd")); // false
// console.log(isKatakana("あ")); // false;
// console.log(isKatakana("水")); // true;
// console.log(isKatakana("〠")); // true;
// console.log(isKatakana("✩")); // true;

// function isSymbol (x) {
//     return x.charCodeAt(0);
// }
// console.log('====================================');
// console.log(isSymbol('✩'));
// console.log(isSymbol('水'));
// console.log('====================================');
