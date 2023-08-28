// console.log(array1 == array2)

// let botAttribute = [
//   {
//     odd: 0.5
//   }
// ]

let botAttribute = [];
let bettingData = {
  odd: [0.5, -0.5],
  over_under: [2, 2.5, 3]
}
// console.log(Object.keys(bettingData).length)

let countAttr = 0;
while (countAttr < Object.keys(bettingData).length)
{
    for(let i in bettingData)
    {
        // console.log(Array.isArray(bettingData[i]));
        if (Array.isArray(bettingData[i])) {
        bettingData[i].forEach((elem) => {
            console.log(elem)
        });
        }

        //sort data
        
    }
    countAttr++;
}