var pHiragana = "[\\u3041-\\u3096\\u309D-\\u309F]|\\uD82C\\uDC01|\\uD83C\\uDE00";
    var pKatakana = "[\\u30A1-\\u30FA\\u30FD-\\u30FF\\u31F0-\\u31FF\\u32D0-\\u32FE\\u3300-\\u3357\\uFF66-\\uFF6F\\uFF71-\\uFF9D]|\\uD82C\\uDC00";
    var pHan = "[\\u2E80-\\u2E99\\u2E9B-\\u2EF3\\u2F00-\\u2FD5\\u3005\\u3007\\u3021-\\u3029\\u3038-\\u303B\\u3400-\\u4DB5\\u4E00-\\u9FD5\\uF900-\\uFA6D\\uFA70-\\uFAD9]|[\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872][\\uDC00-\\uDFFF]|\\uD869[\\uDC00-\\uDED6\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF34\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1]|\\uD87E[\\uDC00-\\uDE1D]";
    var regexHiragana = new RegExp(pHiragana);
    var regexKatakana = new RegExp(pKatakana);
    var regexHan = new RegExp(pHan);
    let rx = new RegExp("^([^\\W_]|" + pHiragana + "|" + pKatakana + "|" + pHan + ")+_" + "([^\\W_]|" + pHiragana + "|" + pKatakana + "|" + pHan + ")+$");
    function convertToASCII(chars) {
        var ascii = '';
        for(var i=0, l=chars.length; i<l; i++) {
            var c = chars[i].charCodeAt(0);

            // make sure we only convert half-full width char
            if (c >= 0xFF00 && c <= 0xFFEF) {
                c = 0xFF & (c + 0x20);
            }

            if (regexHiragana.test(chars[i]) || regexKatakana.test(chars[i]) || regexHan.test(chars[i])) {
                ascii += chars[i];
            } else {
                ascii += String.fromCharCode(c);
            }
        }

        return ascii;
    }

    console.log('====================================');
    console.log(rx.test(convertToASCII("Te_Tr２１３１３１３１３２１３１３２１１３５４２１３２１６５４８７８７９８４０５４２１３１５４")));
    console.log(rx.test(convertToASCII("Module_Test1231234561234561324\\65123国国国国国国国ﾅﾅﾅﾅﾅﾅﾅﾅ")));
    console.log(rx.test(convertToASCII("Module_Test123123456123456132465123国国国国国国国ﾅﾅﾅﾅﾅﾅﾅﾅ")));
    console.log(rx.test(convertToASCII("TＡＶＡＳＶＡ１２３e_TrＡＶＡＳ＼ＶＡ１２３１")));
    console.log(rx.test(convertToASCII("Module_Test123123456123456132465123国国国国国国国ナナナナナナナナ")));
    console.log('====================================');