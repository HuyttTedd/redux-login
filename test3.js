function getCombinations(valuesArray, max = 0)
{
    var combi = [];
    var temp = [];
    var slent = Math.pow(2, valuesArray.length);

    for (var i = 1; i < slent; i++)
    {
        temp = [];
        for (var j = 0; j < valuesArray.length; j++)
        {
            if ((i & Math.pow(2, j)))
            {
                temp.push(valuesArray[j]);
            }
        }

        if (!temp.length) {
            continue;
        }

        if (max === 0 || (max && temp.length <= max)) {
            combi.push(temp);
        }
    }

    combi.sort((a, b) => a.length - b.length);
    // console.log(combi.join("\n"));
    return combi;
}

// console.log('====================================');
// console.log(getCombinations([
//     'min_total_match', 'odd', 'over_under', 'bet_in_match'
// ]));
// console.log('====================================');

function generateOddArray(odd_range) {
    let oddArr = [];
    let odd = -odd_range;
    while (odd <= odd_range) {
        let obj = {};
        obj['odd'] = odd;
        oddArr.push(obj);
        odd += 0.25;
    }

    return oddArr;
}

// console.log('====================================');
// console.log(generateOddArray(8));
// console.log('====================================');

function generateMinTotalMatchArray(min_total_match_range) {
    let arr = [];
    let min = min_total_match_range.min;
    let max = min_total_match_range.max;
    while (min <= max) {
        let obj = {};
        obj['min_total_match'] = min;
        arr.push(obj);
        min ++;
    }

    return arr;
}
let min_total_match_range = {
    min: 5,
    max: 10
};
// console.log('====================================');
// console.log(generateMinTotalMatchArray(min_total_match_range));
// console.log('====================================');

function generateOverUnderArray(over_under_range) {
    let overUnderArr = [];
    let value = 1.75;
    while (value <= over_under_range) {
        let obj = {};
        obj['over_under'] = value;
        overUnderArr.push(obj);
        value += 0.25;
    }

    return overUnderArr;
}

let a1 = generateOverUnderArray(3.75);
// let a2 = generateMinTotalMatchArray(min_total_match_range);
let a3 = generateOddArray(1.75);

let aTo = a1.concat(a3);
console.log('====================================');
console.log(aTo);
// console.log(getCombinations(aTo, 4));
console.log('====================================');


let bet_in_match = [
    'over',
    'under',
    'favorite',
    'underdog'
];
let combine = getCombinations(aTo, 4);
let data = [];
bet_in_match.forEach(elememt => {
    combine.forEach(elem => {
        let obj = {};
        let flag = [...elem];
        obj["bet_in_match"] = elememt;
        flag.push(obj);
        data.push(flag);
    })
})

data.forEach(ele => {
    let piece = [];
    let allKeys = ele.flatMap((obj) => Object.keys(obj));
    let mySet1 = new Set();
    let dup = [];
    allKeys.forEach(key => {
        if (mySet1.has(key) && !dup.includes(key)) {
            dup.push(key);
        }
        mySet1.add(key);
    })

    let newArr = {};
    ele.forEach(e => {
        let pushed = false;
        dup.forEach(du => {
            if (e.hasOwnProperty(du)) {
                pushed = true;
                newArr[du].push(e[du]);
            }
        })
        if (pushed) {
            
        }
    })
})


console.log('====================================');
console.log(data);
console.log('====================================');